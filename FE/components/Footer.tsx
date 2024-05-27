import { Twitter } from "lucide-react";

const Footer = () => (
  <footer>
    <div className='custom-screen pt-16'>
      <div className='mt-10 py-10 border-t items-center justify-between flex ml-10'>
        <p className='text-gray-600'>
          Created by{' '}
          <a
            href='https://twitter.com/selimpy?s=21&t=ldhiyWw4HDQeUOPV2TCuJg'
            className='hover:underline transition'
          >
            Selim 
          </a>
        </p>
        <div className='flex items-center gap-x-6 text-gray-400'>
            <span className='text-gray-500 mr-10'>
              Powered by Chatgpt & gpt-4o
            </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
