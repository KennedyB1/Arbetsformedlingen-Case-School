import "../style/Header.css";

export const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="headerImgWrapper">
          <img
            src="/public/LogoHeader.png"
            alt="Gulorange pil och texten Studiematcharen - Din väg till att hitta rätt utbildning"
          />
        </div>
      </div>
    </>
  );
};
