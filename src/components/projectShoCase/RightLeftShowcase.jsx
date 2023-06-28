import React from "react";
import Open from "../../assets/open";
import GitHib from "../../assets/gitHib";
import { hideOverLay, showOverLay } from "../functions";

const RightLeftShowcase = ({
  projectName,
  discription,
  Tools,
  Image,
  overlayId,
  noCode,
  link,
  gitHub,
}) => {
  return (
    <div className="grid2">
      <div className="hideTabAndMobile">
        <div className="stack gap2">
          <div className="stack gap Start">
            <p className="featuredText">Featured Project</p>

            <h1 className="lightSlateText headingText">{projectName}</h1>
          </div>

          <div className="discriptBox ExtraWidth">
            <p className="textAlignStart slateText ">{discription}</p>
          </div>

          <div className="flex gap2 start ">
            <div className="flex2 widthRestrict2">
              {Tools.map((m) => (
                <p className="slateText">{m}</p>
              ))}
            </div>
          </div>
          <div className="flex gap2 Start">
            <a href={link}>
              <Open />
            </a>
            {noCode ? (
              ""
            ) : (
              <a href={gitHub} className="pointer">
                <GitHib />
              </a>
            )}
          </div>
        </div>
      </div>

      <div style={{ paddingLeft: "-9rem" }} className="hideTabAndMobile">
        <div className="relative">
          <img
            style={{ width: "100%" }}
            className="responsive projectImg fit"
            src={Image}
            alt=""
          />
          <div className="overFlowHidden">
            <div
              style={{ width: "100%" }}
              onMouseOver={() => hideOverLay(overlayId)}
              onMouseLeave={() => showOverLay(overlayId)}
              id={overlayId}
              className="imageOverlay transition2 pointer fit"
            ></div>
          </div>
        </div>
      </div>
      <div className="showCase relative">
        <img src={Image} alt="" />
        <div className="stack gap3 hideDeskTopFlex padding1 ">
          <div className="stack gap Start">
            <p className="featuredText">Featured Project</p>
            <h1 className="lightSlateText headingText">{projectName}</h1>
          </div>

          <div className="">
            <p className="textAlignStart slateText ">{discription}</p>
          </div>

          <div className="flex gap2 start ">
            <div className="flex2 widthRestrict2">
              {Tools.map((m) => (
                <p className="slateText">{m}</p>
              ))}
            </div>
          </div>
          <div className="flex gap2 Start">
            <a href={link}>
              <Open />
            </a>
            {noCode ? (
              ""
            ) : (
              <a href={gitHub} className="pointer">
                <GitHib />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightLeftShowcase;
