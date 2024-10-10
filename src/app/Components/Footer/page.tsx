// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Comforty. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="/" className="hover:text-gray-400">Privacy Policy</a>
            <a href="/" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  