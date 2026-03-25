const puppeteer = require('puppeteer');
const sharp = require('sharp');
const pngToIco = require('png-to-ico');
const fs = require('fs');
const path = require('path');

const publicDir = path.resolve(__dirname, '../../public');
const dirs = [
    '',
    'logo',
    'opengraph',
    'screenshots/web',
    'screenshots/mobile'
];

dirs.forEach(d => {
    const dirPath = path.join(publicDir, d);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
});

const fonts = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }
        .logo-text { font-family: 'DM Serif Display', serif; }
    </style>
`;

async function renderHtml(page, html, width, height, scale = 1, format = 'png', filepath) {
    if (format !== 'svg') {
        await page.setViewport({ width, height, deviceScaleFactor: scale });
        await page.setContent(`<!DOCTYPE html><html><head>${fonts}</head><body style="width:${width}px;height:${height}px;overflow:hidden;position:relative;">${html}</body></html>`, { waitUntil: 'load', timeout: 60000 });
        await page.evaluateHandle('document.fonts.ready');
        await new Promise(r => setTimeout(r, 1000));
        
        const fileExt = path.extname(filepath).toLowerCase();
        const saveFormat = fileExt === '.jpg' || fileExt === '.jpeg' ? 'jpeg' : (fileExt === '.webp' ? 'webp' : 'png');
        
        await page.screenshot({ path: filepath, type: saveFormat, quality: saveFormat !== 'png' ? 90 : undefined, omitBackground: true });
        console.log(`Generated HTML -> ${filepath}`);
    }
}

async function renderSvg(svgString, width, height, filepath) {
    const fileExt = path.extname(filepath).toLowerCase();
    const formatter = sharp(Buffer.from(svgString)).resize(width, height);
    if (fileExt === '.png') await formatter.png().toFile(filepath);
    else if (fileExt === '.webp') await formatter.webp().toFile(filepath);
    else if (fileExt === '.jpg' || fileExt === '.jpeg') await formatter.jpeg().toFile(filepath);
    else if (fileExt === '.ico') {
        const tempPng = filepath + '.tmp.png';
        await formatter.png().toFile(tempPng);
        const buf = await pngToIco.default(tempPng);
        fs.writeFileSync(filepath, buf);
        fs.unlinkSync(tempPng);
    }
    console.log(`Generated SVG -> ${filepath}`);
}

(async () => {
    let browser;
    try {
        browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        const page = await browser.newPage();

        // 1. Icons
        const iconSvg = (bg, textCol, scale) => `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <rect x="${512 * (1 - scale) / 2}" y="${512 * (1 - scale) / 2}" width="${512 * scale}" height="${512 * scale}" rx="${128 * scale}" fill="${bg}"/>
            <text x="256" y="326" font-family="'DM Serif Display', serif" font-size="${250 * scale}" fill="${textCol}" text-anchor="middle" font-weight="bold">Cv</text>
        </svg>`;

        // Favicon
        await renderSvg(iconSvg('#0F2240', '#FFFFFF', 1), 48, 48, path.join(publicDir, 'favicon.ico'));
        // Apple Touch Icon
        await renderSvg(iconSvg('#0F2240', '#FFFFFF', 1), 180, 180, path.join(publicDir, 'apple-touch-icon-180x180.png'));
        // PWA Icons
        await renderSvg(iconSvg('#0F2240', '#FFFFFF', 1), 64, 64, path.join(publicDir, 'pwa-64x64.png'));
        await renderSvg(iconSvg('#0F2240', '#FFFFFF', 1), 192, 192, path.join(publicDir, 'pwa-192x192.png'));
        await renderSvg(iconSvg('#0F2240', '#FFFFFF', 1), 512, 512, path.join(publicDir, 'pwa-512x512.png'));
        // Maskable Icon
        await renderSvg(`<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <rect width="512" height="512" fill="#0F2240"/>
            <rect x="51.2" y="51.2" width="409.6" height="409.6" rx="100" fill="#0F2240"/>
            <text x="256" y="326" font-family="'DM Serif Display', serif" font-size="200" fill="#FFFFFF" text-anchor="middle" font-weight="bold">Cv</text>
        </svg>`, 512, 512, path.join(publicDir, 'maskable-icon-512x512.png'));

        // 2. Logos
        const logoSvg = (cvCol, stylerCol) => `<svg width="200" height="48" viewBox="0 0 200 48" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="36" font-family="'DM Serif Display', serif" font-size="32" fill="${cvCol}">CV</text>
            <text x="48" y="36" font-family="'DM Serif Display', serif" font-size="32" fill="${stylerCol}">styler</text>
        </svg>`;
        await renderSvg(logoSvg('#0F2240', '#2563EB'), 200, 48, path.join(publicDir, 'logo/light.png'));
        await renderSvg(logoSvg('#FFFFFF', '#60A5FA'), 200, 48, path.join(publicDir, 'logo/dark.png'));

        // 3. OpenGraph Banner
        const ogBannerHtml = `
            <div style="background-color: #0F2240; width: 100%; height: 100%; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; background-image: radial-gradient(circle at center, #1E3A5F 0%, transparent 60%);">
                <div style="font-size: 80px; display: flex; align-items: center; gap: 8px;" class="logo-text">
                    <span style="color: #FFFFFF;">CV</span><span style="color: #60A5FA;">styler</span>
                </div>
                <div style="color: #94A3B8; font-size: 24px; margin-top: 16px;">Create Your Professional CV & Resume For Free</div>
                <div style="position: absolute; bottom: 32px; right: 48px; color: #475569; font-size: 16px; font-weight: 500;">cvpro.dpnmw.com</div>
            </div>
        `;
        await renderHtml(page, ogBannerHtml, 1200, 630, 1, 'jpg', path.join(publicDir, 'opengraph/banner.jpg'));

        // 4. OpenGraph Features
        const ogFeaturesHtml = `
            <div style="background-color: #0F2240; width: 100%; height: 100%; position: relative; padding: 80px 100px; display: flex; flex-direction: column; align-items: center;">
                <h1 style="color: #FFFFFF; font-size: 64px; font-weight: 700; margin-bottom: 80px;">Free CV & Resume Builder</h1>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 64px 120px; width: 80%; max-width: 800px;">
                    <div style="display: flex; align-items: center; gap: 24px;">
                        <i class="ph ph-file-text" style="color: #60A5FA; font-size: 48px;"></i>
                        <span style="color: #FFFFFF; font-size: 32px; font-weight: 500;">13+ Templates</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 24px;">
                        <i class="ph ph-download-simple" style="color: #60A5FA; font-size: 48px;"></i>
                        <span style="color: #FFFFFF; font-size: 32px; font-weight: 500;">PDF Export</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 24px;">
                        <i class="ph ph-sparkle" style="color: #60A5FA; font-size: 48px;"></i>
                        <span style="color: #FFFFFF; font-size: 32px; font-weight: 500;">AI Powered</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 24px;">
                        <i class="ph ph-moon" style="color: #60A5FA; font-size: 48px;"></i>
                        <span style="color: #FFFFFF; font-size: 32px; font-weight: 500;">Dark Mode</span>
                    </div>
                </div>
                <div style="position: absolute; bottom: 32px; right: 48px; color: #475569; font-size: 16px; font-weight: 500;">cvpro.dpnmw.com</div>
            </div>
        `;
        await renderHtml(page, ogFeaturesHtml, 1200, 630, 1, 'jpg', path.join(publicDir, 'opengraph/features.jpg'));

        // 5. Screenshots
        // Component snippets
        const topNav = (isDark = false) => `
            <div style="height: 80px; width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 0 48px; border-bottom: 1px solid ${isDark ? '#1E293B' : '#E2E8F0'};">
                <div style="font-size: 28px; display: flex; align-items: center; gap: 4px;" class="logo-text">
                    <span style="color: ${isDark ? '#FFFFFF' : '#0F2240'};">CV</span><span style="color: ${isDark ? '#60A5FA' : '#2563EB'};">styler</span>
                </div>
                <div style="display: flex; gap: 24px; align-items: center;">
                    <span style="color: ${isDark ? '#CBD5E1' : '#475569'}; font-size: 16px; font-weight: 500;">Templates</span>
                    <span style="color: ${isDark ? '#CBD5E1' : '#475569'}; font-size: 16px; font-weight: 500;">Features</span>
                    <div style="background-color: #2563EB; color: white; padding: 10px 24px; border-radius: 6px; font-weight: 600; font-size: 16px;">Get Started</div>
                </div>
            </div>
        `;

        // Web 1 Landing Page
        const webLandingHtml = `
            <div style="background-color: #0F2240; width: 100%; height: 100%; overflow: hidden; position: relative;">
                ${topNav(true)}
                <div style="padding: 120px 48px; max-width: 1200px; margin: 0 auto; text-align: center; position: relative; z-index: 2;">
                    <div style="color: #60A5FA; font-weight: 600; font-size: 16px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 24px;">nano banana pro 2 quality</div>
                    <h1 style="color: #FFFFFF; font-size: 84px; font-weight: 800; line-height: 1.1; margin-bottom: 32px; letter-spacing: -0.02em;">Your Career Story,<br>Perfectly Styled</h1>
                    <p style="color: #94A3B8; font-size: 22px; max-width: 600px; margin: 0 auto 48px; line-height: 1.6;">Create Your Professional CV & Resume For Free. Stand out from the crowd with our modern, AT$ parser-friendly templates.</p>
                    <div style="display: flex; gap: 16px; justify-content: center;">
                        <div style="background-color: #2563EB; color: white; padding: 18px 40px; border-radius: 8px; font-weight: 600; font-size: 18px; box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.39);">Build My Resume</div>
                        <div style="background-color: #1E293B; color: white; padding: 18px 40px; border-radius: 8px; font-weight: 600; font-size: 18px; border: 1px solid #334155;">View Templates</div>
                    </div>
                </div>
                <div style="position: absolute; bottom: -200px; left: 50%; transform: translateX(-50%); width: 1000px; height: 500px; background: linear-gradient(180deg, #1E293B 0%, #0F2240 100%); border-radius: 16px 16px 0 0; border: 1px solid #334155; border-bottom: none; box-shadow: 0 -20px 40px rgba(0,0,0,0.5);">
                    <div style="padding: 24px; border-bottom: 1px solid #334155; display: flex; gap: 8px;">
                        <div style="width: 12px; height: 12px; border-radius: 50%; background: #EF4444;"></div>
                        <div style="width: 12px; height: 12px; border-radius: 50%; background: #EAB308;"></div>
                        <div style="width: 12px; height: 12px; border-radius: 50%; background: #22C55E;"></div>
                    </div>
                    <div style="padding: 40px; display: flex; gap: 32px;">
                        <div style="width: 30%; height: 200px; background: #334155; border-radius: 8px;"></div>
                        <div style="width: 65%; height: 400px; background: #334155; border-radius: 8px;"></div>
                    </div>
                </div>
            </div>
        `;
        await renderHtml(page, webLandingHtml, 1920, 1080, 1, 'webp', path.join(publicDir, 'screenshots/web/1-landing-page.webp'));

        // Web 2 Dashboard
        const webDashboardHtml = `
            <div style="background-color: #F8FAFC; width: 100%; height: 100%; display: flex;">
                <div style="width: 280px; height: 100%; background: #FFFFFF; border-right: 1px solid #E2E8F0; padding: 32px 24px; display: flex; flex-direction: column;">
                    <div style="font-size: 28px; display: flex; align-items: center; gap: 4px; margin-bottom: 48px;" class="logo-text">
                        <span style="color: #0F2240;">CV</span><span style="color: #2563EB;">styler</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <div style="padding: 12px 16px; background: #EFF6FF; color: #1D4ED8; border-radius: 8px; font-weight: 600; display: flex; align-items: center; gap: 12px;"><i class="ph ph-files" style="font-size: 20px;"></i> My Resumes</div>
                        <div style="padding: 12px 16px; color: #475569; font-weight: 500; display: flex; align-items: center; gap: 12px;"><i class="ph ph-user-circle" style="font-size: 20px;"></i> Profile</div>
                        <div style="padding: 12px 16px; color: #475569; font-weight: 500; display: flex; align-items: center; gap: 12px;"><i class="ph ph-gear" style="font-size: 20px;"></i> Settings</div>
                    </div>
                </div>
                <div style="flex: 1; padding: 48px 64px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px;">
                        <div>
                            <h1 style="color: #0F2240; font-size: 36px; font-weight: 700; margin-bottom: 8px;">My Resumes</h1>
                            <p style="color: #64748B; font-size: 16px;">Manage and edit your professional resumes.</p>
                        </div>
                        <div style="background-color: #2563EB; color: white; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 16px; display: flex; align-items: center; gap: 8px;"><i class="ph ph-plus-circle" style="font-size: 20px;"></i> Create New</div>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px;">
                        ${[...Array(6)].map((_, i) => `
                            <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); transition: transform 0.2s;">
                                <div style="height: 200px; background: ${['#EFF6FF', '#F0FDF4', '#FEF2F2', '#FAF5FF', '#FFFBEB', '#F8FAFC'][i]}; border-bottom: 1px solid #E2E8F0; display: flex; justify-content: center; align-items: center; position: relative;">
                                    <div style="width: 120px; height: 160px; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-radius: 4px; padding: 12px;">
                                        <div style="width: 40%; height: 6px; background: #CBD5E1; margin-bottom: 16px; border-radius: 2px;"></div>
                                        <div style="width: 100%; height: 4px; background: #E2E8F0; margin-bottom: 6px; border-radius: 2px;"></div>
                                        <div style="width: 80%; height: 4px; background: #E2E8F0; margin-bottom: 16px; border-radius: 2px;"></div>
                                        <div style="width: 100%; height: 4px; background: #E2E8F0; margin-bottom: 6px; border-radius: 2px;"></div>
                                        <div style="width: 90%; height: 4px; background: #E2E8F0; margin-bottom: 6px; border-radius: 2px;"></div>
                                    </div>
                                    <div style="position: absolute; top: 12px; right: 12px; background: white; padding: 6px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><i class="ph ph-dots-three-vertical"></i></div>
                                </div>
                                <div style="padding: 20px;">
                                    <h3 style="color: #0F2240; font-weight: 600; font-size: 18px; margin-bottom: 4px;">Software Engineer</h3>
                                    <p style="color: #64748B; font-size: 14px;">Updated 2 days ago</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        await renderHtml(page, webDashboardHtml, 1920, 1080, 1, 'webp', path.join(publicDir, 'screenshots/web/2-resume-dashboard.webp'));

        // Web 3 Builder Screen
        const webBuilderHtml = `
            <div style="background-color: #F8FAFC; width: 100%; height: 100%; display: flex; flex-direction: column;">
                <div style="height: 64px; background: #FFFFFF; border-bottom: 1px solid #E2E8F0; display: flex; justify-content: space-between; align-items: center; padding: 0 24px;">
                    <div style="display: flex; align-items: center; gap: 16px;">
                        <div style="font-size: 20px; padding-right: 16px; border-right: 1px solid #E2E8F0;" class="logo-text"><span style="color: #0F2240;">CV</span><span style="color: #2563EB;">styler</span></div>
                        <span style="font-weight: 600; color: #0F2240;">Software Engineer</span>
                    </div>
                    <div style="display: flex; gap: 12px;">
                        <div style="padding: 8px 16px; border: 1px solid #E2E8F0; border-radius: 6px; font-weight: 500; font-size: 14px; background: white;"><i class="ph ph-arrow-counter-clockwise"></i></div>
                        <div style="padding: 8px 16px; border: 1px solid #E2E8F0; border-radius: 6px; font-weight: 500; font-size: 14px; background: white;"><i class="ph ph-download-simple"></i> Export PDF</div>
                        <div style="padding: 8px 16px; background: #2563EB; color: white; border-radius: 6px; font-weight: 500; font-size: 14px;">Save Options</div>
                    </div>
                </div>
                <div style="flex: 1; display: flex; overflow: hidden;">
                    <div style="width: 450px; background: #FFFFFF; border-right: 1px solid #E2E8F0; padding: 24px; overflow-y: auto;">
                        <h2 style="font-size: 18px; font-weight: 600; color: #0F2240; margin-bottom: 24px; display: flex; align-items: center; gap: 8px;"><i class="ph ph-user"></i> Personal Info</h2>
                        <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px;">
                            <div>
                                <label style="display: block; font-size: 14px; font-weight: 500; color: #475569; margin-bottom: 6px;">Full Name</label>
                                <input type="text" value="Jane Doe" style="width: 100%; padding: 10px 12px; border: 2px solid #2563EB; border-radius: 6px; outline: none; font-family: inherit; font-size: 14px;">
                            </div>
                            <div>
                                <label style="display: block; font-size: 14px; font-weight: 500; color: #475569; margin-bottom: 6px;">Job Title</label>
                                <input type="text" value="Senior Frontend Developer" style="width: 100%; padding: 10px 12px; border: 1px solid #CBD5E1; border-radius: 6px; outline: none; font-family: inherit; font-size: 14px;">
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                                <div>
                                    <label style="display: block; font-size: 14px; font-weight: 500; color: #475569; margin-bottom: 6px;">Email</label>
                                    <input type="text" value="jane@example.com" style="width: 100%; padding: 10px 12px; border: 1px solid #CBD5E1; border-radius: 6px; outline: none; font-family: inherit; font-size: 14px;">
                                </div>
                                <div>
                                    <label style="display: block; font-size: 14px; font-weight: 500; color: #475569; margin-bottom: 6px;">Phone</label>
                                    <input type="text" value="+1 234 567 890" style="width: 100%; padding: 10px 12px; border: 1px solid #CBD5E1; border-radius: 6px; outline: none; font-family: inherit; font-size: 14px;">
                                </div>
                            </div>
                        </div>
                        <h2 style="font-size: 18px; font-weight: 600; color: #0F2240; margin-bottom: 24px; display: flex; align-items: center; gap: 8px;"><i class="ph ph-briefcase"></i> Experience</h2>
                        <div style="border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px;">
                            <div style="font-weight: 600; font-size: 14px; color: #0F2240;">Senior Developer</div>
                            <div style="font-size: 13px; color: #64748B;">Tech Corp Inc. • 2020 - Present</div>
                        </div>
                    </div>
                    <div style="flex: 1; display: flex; justify-content: center; align-items: center; padding: 40px; background: #64748B;">
                        <div style="width: 600px; height: 848px; background: #FFFFFF; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); border-radius: 4px; padding: 48px; position: relative;">
                            <!-- Active field highlight box representing visual builder feedback -->
                            <div style="position: absolute; top: 40px; left: 40px; right: 40px; height: 90px; border: 2px dashed #2563EB; background: rgba(37, 99, 235, 0.05); border-radius: 4px;"></div>
                            <h1 style="font-size: 36px; font-weight: 700; color: #0F2240; margin-bottom: 4px; line-height: 1; position: relative; z-index: 2;">Jane Doe</h1>
                            <h2 style="font-size: 18px; color: #2563EB; font-weight: 500; margin-bottom: 24px; position: relative; z-index: 2;">Senior Frontend Developer</h2>
                            
                            <div style="display: flex; gap: 16px; font-size: 12px; color: #475569; margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid #E2E8F0;">
                                <span>jane@example.com</span> • <span>+1 234 567 890</span> • <span>San Francisco, CA</span>
                            </div>

                            <h3 style="font-size: 16px; font-weight: 700; color: #0F2240; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;">Experience</h3>
                            <div style="margin-bottom: 24px;">
                                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
                                    <div style="font-size: 15px; font-weight: 600; color: #0F2240;">Senior Developer</div>
                                    <div style="font-size: 13px; color: #64748B;">2020 - Present</div>
                                </div>
                                <div style="font-size: 14px; color: #475569; font-weight: 500; margin-bottom: 8px;">Tech Corp Inc.</div>
                                <ul style="font-size: 13px; color: #475569; margin-left: 16px; line-height: 1.6;">
                                    <li>Led frontend development team to rebuild the core customer portal using React.</li>
                                    <li>Improved application performance by 40% loading times.</li>
                                    <li>Mentored junior engineers and conducted code reviews.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        await renderHtml(page, webBuilderHtml, 1920, 1080, 1, 'webp', path.join(publicDir, 'screenshots/web/3-builder-screen.webp'));

        // Web 4 Template Gallery
        const webGalleryHtml = `
            <div style="background-color: #F8FAFC; width: 100%; height: 100%; display: flex; flex-direction: column;">
                ${topNav(false)}
                <div style="padding: 64px 80px; max-width: 1440px; margin: 0 auto; width: 100%;">
                    <div style="text-align: center; margin-bottom: 64px;">
                        <h1 style="color: #0F2240; font-size: 48px; font-weight: 700; margin-bottom: 16px;">Choose a Template</h1>
                        <p style="color: #64748B; font-size: 18px;">Start with a professional template designed to get you hired.</p>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px;">
                        ${['Azurill', 'Bronzor', 'Chikorita', 'Ditto', 'Eevee', 'Fennekin', 'Gengar', 'Ho-oh'].map((name, i) => `
                            <div style="position: relative; group">
                                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); height: 400px; display: flex; justify-content: center; align-items: flex-start; padding-top: 24px; transition: transform 0.2s;">
                                    <div style="width: 200px; height: 280px; background: white; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #F1F5F9; border-top: 12px solid ${['#2563EB', '#10B981', '#F59E0B', '#6366F1', '#EC4899', '#8B5CF6', '#14B8A6', '#F43F5E'][i]}; padding: 16px; opacity: 0.9;">
                                        <div style="width: 60%; height: 8px; background: #0F2240; margin-bottom: 16px; border-radius: 2px;"></div>
                                        <div style="width: 100%; height: 4px; background: #E2E8F0; margin-bottom: 8px; border-radius: 2px;"></div>
                                        <div style="width: 100%; height: 4px; background: #E2E8F0; margin-bottom: 8px; border-radius: 2px;"></div>
                                        <div style="width: 80%; height: 4px; background: #E2E8F0; margin-bottom: 24px; border-radius: 2px;"></div>
                                        
                                        <div style="width: 40%; height: 6px; background: #CBD5E1; margin-bottom: 12px; border-radius: 2px;"></div>
                                        <div style="width: 100%; height: 4px; background: #E2E8F0; margin-bottom: 8px; border-radius: 2px;"></div>
                                        <div style="width: 100%; height: 4px; background: #E2E8F0; margin-bottom: 8px; border-radius: 2px;"></div>
                                    </div>
                                </div>
                                <div style="margin-top: 16px; text-align: center;">
                                    <h3 style="color: #0F2240; font-weight: 600; font-size: 20px;">${name}</h3>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        await renderHtml(page, webGalleryHtml, 1920, 1080, 1, 'webp', path.join(publicDir, 'screenshots/web/4-template-gallery.webp'));

        // Mobile Screenshots (390x844)
        const topNavMobile = (isDark = false) => `
            <div style="height: 64px; width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; border-bottom: 1px solid ${isDark ? '#1E293B' : '#E2E8F0'};">
                <div style="font-size: 22px; display: flex; align-items: center; gap: 4px;" class="logo-text">
                    <span style="color: ${isDark ? '#FFFFFF' : '#0F2240'};">CV</span><span style="color: ${isDark ? '#60A5FA' : '#2563EB'};">styler</span>
                </div>
                <div style="color: ${isDark ? '#FFFFFF' : '#0F2240'};"><i class="ph ph-list" style="font-size: 28px;"></i></div>
            </div>
        `;

        // Mobile 1
        const mobLandingHtml = `
            <div style="background-color: #0F2240; width: 100%; height: 100%; overflow: hidden; position: relative;">
                ${topNavMobile(true)}
                <div style="padding: 60px 24px; text-align: center; position: relative; z-index: 2;">
                    <div style="color: #60A5FA; font-weight: 600; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px;">premium quality</div>
                    <h1 style="color: #FFFFFF; font-size: 40px; font-weight: 800; line-height: 1.1; margin-bottom: 24px; letter-spacing: -0.02em;">Your Career Story,<br>Perfectly Styled</h1>
                    <p style="color: #94A3B8; font-size: 16px; margin: 0 auto 32px; line-height: 1.6;">Create Your Professional CV & Resume For Free.</p>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="background-color: #2563EB; color: white; padding: 16px; border-radius: 8px; font-weight: 600; font-size: 16px;">Build My Resume</div>
                    </div>
                </div>
                <div style="position: absolute; bottom: 0; left: 24px; right: 24px; height: 300px; background: #1E293B; border-radius: 12px 12px 0 0; border: 1px solid #334155; border-bottom: none; box-shadow: 0 -10px 20px rgba(0,0,0,0.5); padding: 20px;">
                    <div style="width: 100%; height: 40px; background: #334155; border-radius: 6px; margin-bottom: 16px;"></div>
                    <div style="width: 100%; height: 100px; background: #334155; border-radius: 6px;"></div>
                </div>
            </div>
        `;
        await renderHtml(page, mobLandingHtml, 390, 844, 2, 'webp', path.join(publicDir, 'screenshots/mobile/1-landing-page.webp'));

        // Mobile 2 Dashboard
        const mobDashboardHtml = `
            <div style="background-color: #F8FAFC; width: 100%; height: 100%; display: flex; flex-direction: column;">
                ${topNavMobile(false)}
                <div style="padding: 24px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                        <h1 style="color: #0F2240; font-size: 24px; font-weight: 700;">My Resumes</h1>
                        <div style="background-color: #2563EB; color: white; padding: 8px 12px; border-radius: 6px; font-weight: 600; font-size: 14px;"><i class="ph ph-plus"></i> New</div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        ${[...Array(3)].map((_, i) => `
                            <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; display: flex;">
                                <div style="width: 80px; height: 100px; background: ${['#EFF6FF', '#F0FDF4', '#FEF2F2'][i]}; display: flex; justify-content: center; align-items: center;">
                                    <div style="width: 40px; height: 56px; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border-radius: 2px;"></div>
                                </div>
                                <div style="padding: 16px; flex: 1; display: flex; flex-direction: column; justify-content: center;">
                                    <h3 style="color: #0F2240; font-weight: 600; font-size: 16px; margin-bottom: 4px;">Software Engineer</h3>
                                    <p style="color: #64748B; font-size: 12px;">Updated 2d ago</p>
                                </div>
                                <div style="padding: 16px; color: #64748B;"><i class="ph ph-dots-three-vertical"></i></div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        await renderHtml(page, mobDashboardHtml, 390, 844, 2, 'webp', path.join(publicDir, 'screenshots/mobile/2-resume-dashboard.webp'));

        // Mobile 3 Builder
        const mobBuilderHtml = `
            <div style="background-color: #FFFFFF; width: 100%; height: 100%; display: flex; flex-direction: column;">
                <div style="height: 56px; background: #FFFFFF; border-bottom: 1px solid #E2E8F0; display: flex; justify-content: space-between; align-items: center; padding: 0 16px;">
                    <div style="font-weight: 600; color: #0F2240; font-size: 16px;"><i class="ph ph-arrow-left" style="margin-right: 8px;"></i> Edit Resume</div>
                    <div style="color: #2563EB; font-weight: 600;"><i class="ph ph-check"></i></div>
                </div>
                <div style="display: flex; border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                    <div style="flex: 1; text-align: center; padding: 12px; font-weight: 600; color: #2563EB; border-bottom: 2px solid #2563EB;">Edit Data</div>
                    <div style="flex: 1; text-align: center; padding: 12px; font-weight: 500; color: #64748B;">Preview</div>
                </div>
                <div style="padding: 24px; flex: 1; overflow-y: auto;">
                    <h2 style="font-size: 18px; font-weight: 600; color: #0F2240; margin-bottom: 24px;"><i class="ph ph-user"></i> Personal Info</h2>
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        <div>
                            <label style="display: block; font-size: 14px; font-weight: 500; color: #475569; margin-bottom: 6px;">Full Name</label>
                            <input type="text" value="Jane Doe" style="width: 100%; padding: 12px; border: 2px solid #2563EB; border-radius: 6px; outline: none; font-size: 16px; background: rgba(37,99,235,0.05);">
                        </div>
                        <div>
                            <label style="display: block; font-size: 14px; font-weight: 500; color: #475569; margin-bottom: 6px;">Job Title</label>
                            <input type="text" value="Senior Frontend Developer" style="width: 100%; padding: 12px; border: 1px solid #CBD5E1; border-radius: 6px; outline: none; font-size: 16px;">
                        </div>
                    </div>
                </div>
            </div>
        `;
        await renderHtml(page, mobBuilderHtml, 390, 844, 2, 'webp', path.join(publicDir, 'screenshots/mobile/3-builder-screen.webp'));

        // Mobile 4 Gallery
        const mobGalleryHtml = `
            <div style="background-color: #F8FAFC; width: 100%; height: 100%; display: flex; flex-direction: column;">
                ${topNavMobile(false)}
                <div style="padding: 24px;">
                    <h1 style="color: #0F2240; font-size: 28px; font-weight: 700; margin-bottom: 8px;">Templates</h1>
                    <p style="color: #64748B; font-size: 14px; margin-bottom: 24px;">Choose a professional template.</p>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
                        ${['Azurill', 'Bronzor', 'Chikorita', 'Ditto'].map((name, i) => `
                            <div>
                                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); height: 200px; display: flex; justify-content: center; align-items: flex-start; padding-top: 16px;">
                                    <div style="width: 100px; height: 140px; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border: 1px solid #F1F5F9; border-top: 6px solid ${['#2563EB', '#10B981', '#F59E0B', '#6366F1'][i]}; padding: 8px;">
                                        <div style="width: 60%; height: 4px; background: #0F2240; margin-bottom: 8px; border-radius: 2px;"></div>
                                        <div style="width: 100%; height: 2px; background: #E2E8F0; margin-bottom: 4px;"></div>
                                        <div style="width: 80%; height: 2px; background: #E2E8F0; margin-bottom: 12px;"></div>
                                    </div>
                                </div>
                                <div style="margin-top: 8px; text-align: center;">
                                    <h3 style="color: #0F2240; font-weight: 600; font-size: 14px;">${name}</h3>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        await renderHtml(page, mobGalleryHtml, 390, 844, 2, 'webp', path.join(publicDir, 'screenshots/mobile/4-template-gallery.webp'));

        console.log("All assets generated successfully.");
        await browser.close();
    } catch (e) {
        console.error(e);
        if (browser) await browser.close();
        process.exit(1);
    }
})();
