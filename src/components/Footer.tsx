const Footer = () => {
    return (
        <footer className='p-10 bg-white text-gray-900'>
            <div className='flex flex-col md:flex-row md:justify-between gap-10'>
                <div className='max-w-xs'>
                    <div className='flex items-center gap-2'>
                        <span className='flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-purple-600 to-pink-500 text-white text-sm font-bold'>DS</span>
                        <span className='font-semibold'>Dev <span className='text-pink-600'>Stack</span></span>
                    </div>
                    <p className='mt-4 text-sm text-gray-500'>
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>
                    <div className='flex gap-4 mt-4 text-sm font-medium'>
                        <a href="https://github.com">GitHub</a>
                        <a href="https://twitter.com">Twitter</a>
                        <a href="https://linkedin.com">LinkedIn</a>
                    </div>
                </div>

                <div>
                    <h4 className='text-xs font-semibold tracking-wider text-black-500'>PRODUCT</h4>
                    <ul className='mt-3 space-y-2 text-sm text-gray-600'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/technologies">Technologies</a></li>
                        <li><a href="/projects">Projects</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className='text-xs font-semibold tracking-wider text-black-500'>COMPANY</h4>
                    <ul className='mt-3 space-y-2 text-sm text-gray-600'>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/careers">Careers</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className='text-xs font-semibold tracking-wider text-black-500'>LEGAL</h4>
                    <ul className='mt-3 space-y-2 text-sm text-gray-600'>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:justify-between items-center gap-2 mt-10 pt-6 border-t text-sm text-gray-400'>
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <div className='flex gap-4'>
                    <a href="/privacy">Privacy</a>
                    <a href="/terms">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;