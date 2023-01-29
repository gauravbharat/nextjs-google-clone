const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-[50%] translate-x-[-50%] p-6 text-sm text-gray-600 text-center">
      {/* <p>Copyright &copy; {new Date().getFullYear()} Gaurav</p> */}
      <p className="text-sm italic my-10 ">
        This website is created solely for learning purposes and uses Google's
        search APIs.
      </p>
    </footer>
  );
};

export default Footer;
