import React, { useEffect } from "react";
import ShareComponent from "./ShareComponent";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

// import Share from 'react-native-share';
import logo from "./logo.svg";
import placeholder from './placeholder.png'
const MobileShare = () => {
    
  let isClicked = false;
  const handleOnClick = () => {

    // fetch(placeholder)
    //   .then(function (response) {
    //     return response.blob();
    //   })
    //   .then(function (blob) {
    //     console.log(blob);
    //     // here the image is a blob

        // var file = new File([blob], "picture.jpg", {type: 'image/jpeg'});
        // var filesArray = [file];
        // console.log(navigator.canShare)
        // if(navigator.canShare && navigator.canShare({ files: filesArray })) {
        //   navigator.share({
        //     // text: 'some_text',
        //     files: filesArray,
        //     // title: 'some_title',
        //     // url: 'some_url'
        //   });

        // }
    //   });


    htmlToImage
      .toBlob(document.getElementById("DataComponent"))
      .then(function (blob) {
        console.log(blob)

        var file = new File([blob], "picture.jpg", {type: 'image/jpeg'});
        var filesArray = [file];
        console.log(navigator.canShare);

  

        if(navigator.canShare && navigator.canShare({ files: filesArray })) {
          navigator.share({
            text: 'some_text',
            files: filesArray,
            title: 'some_title',
            // url: 'some_url'
          });

        }
        
      });

  };

  const getData = () => {
    return (
        <div style={{background:"blue"}} id="DataComponent"> These Are my FUNS
            <ul>
                <li style={{background:"red"}}> FUNS 1 </li>
                <li style={{background:"green"}}> FUNS 2 </li>
                <li style={{background:"blue"}}> FUNS 3 </li>
                <li style={{background:"red"}}> FUNS 4 </li>
            </ul>
        </div>

    );
  };
  useEffect(() => {}, [isClicked]);
  return (
    <div className="share-icon" onClick={handleOnClick}>
      {getData()}
      {navigator.canShare ? "CAN SHARE" : "CANT SHARE"}
       <h1> HELLO VOWZ </h1>
      <ShareComponent />
    </div>
  );
};

export default MobileShare;
