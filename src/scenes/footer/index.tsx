import Logo from "@/assets/Logo.png";

const Footer = () => {
  const spacing = `mb-3`;
  return (
    <footer className="bg-primary-100 py-16 ">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="my-10 basis-1/2">
          <div className={spacing}>
            <img src={Logo} alt="logo" />
          </div>
          <p className={spacing}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            deleniti. Assumenda sapiente hic quibusdam, harum non sunt iure
            labore eaque.
          </p>
          <p className="{spacing}"> Shape-Up All Right Reserved.</p>
        </div>
        <div className="my-10 basis-1/4">
          <p className={`font-bold ${spacing}`}>Links</p>
          <p className={spacing}>Lorem ipsum dolor sit amet.</p>
          <p className={spacing}>Lorem ipsum dolor sit amet.</p>
          <p className={spacing}>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="my-10 basis-1/4">
          <p className={`font-bold ${spacing}`}>Contact Us</p>
          <p className={spacing}>Lorem ipsum dolor sit amet.</p>
          <p className={spacing}>(222)645-8546</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
