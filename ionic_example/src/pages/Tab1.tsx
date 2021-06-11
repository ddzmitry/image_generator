import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import * as htmlToImage from 'html-to-image';
import './Tab1.css';
import { SocialSharing } from '@ionic-native/social-sharing';

// SocialSharing.shareViaInstagram

const Tab1: React.FC = () => {


  const handleOnClick = () => {
    SocialSharing.shareViaInstagram("Text",  "https://cdn.pixabay.com/photo/2019/12/26/05/10/pink-4719682_960_720.jpg")
    
    htmlToImage.toBlob(document.getElementById("DataComponent")).then(function (blob) {
        console.log(blob)

        var file = new File([blob], "picture.jpg", {type: 'image/jpeg'});
        var filesArray = [file];
        
        
      });

  };

  const getData = () => {
    return (
        <div style={{background:"blue"}} id="DataComponent" onClick={() => {}} > These Are my FUNS
            <ul>
                <li style={{background:"red"}}> FUNS 1 </li>
                <li style={{background:"green"}}> FUNS 2 </li>
                <li style={{background:"blue"}}> FUNS 3 </li>
                <li style={{background:"red"}}> FUNS 4 </li>
            </ul>
        </div>

    );
  };




  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      
        {getData()}
        <IonButton onClick={() => handleOnClick()}>
          Sgare on Instagram
        </IonButton>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
