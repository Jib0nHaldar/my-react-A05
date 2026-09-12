import BannerImage from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className='flex flex-col md:flex-row md:justify-between gap-8 p-10 bg-white text-[#475569]-800'>
            <div>
                <img src={BannerImage} alt="Logo" />
                <p className='text-[#475569]'>
                    Curated tools, technologies, and resources for developers building <br/> modern software.
                </p>
                <ul className='flex flex-row gap-4 mt-4'>
                    <li><a href="https://github.com" className='text-[#475569] hover:underline'>Github</a></li>
                    <li><a href="https://twitter.com" className='text-[#475569] hover:underline'>Twitter</a></li>
                    <li><a href="https://linkedin.com" className='text-[#475569] hover:underline'>LinkedIn</a></li>
                </ul>
            </div>

            <div>
                <h4 className='font-semibold mb-2'>Product</h4>
                <ul className='text-[#475569]'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/technologies">Technologies</a></li>
                    <li><a href="/projects">Projects</a></li>
                </ul>
            </div>

            <div>
                <h4 className='font-semibold mb-2'>Company</h4>
                <ul className='text-[#475569]'>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/careers">Careers</a></li>
                </ul>
            </div>

            <div>
                <h4 className='font-semibold mb-2'>Legal</h4>
                <ul className='text-[#475569]'>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;