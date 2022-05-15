
const {Translate}=require('@google-cloud/translate').v2;

//const visionAPI=new Vision();
const translateAPI=new Translate();

async function detectLanguage(inputText){
    const languageDetection= await translateAPI.detect(inputText);
    console.log(languageDetection);
    return languageDetection;

}

async function translateText(inputText, targetLanguage){
    const outputText=await translateAPI.translate(inputText,targetLanguage);
    console.log(outputText);
    return outputText;
}

// const client=new vision.ImageAnnotatorClient({
//     keyFilename:"./visionkey.json",
// });


// client
// .labelDetection("./cinqueTerre.jpg")
// .then((results)=>{
//     const labels=results[0].labelAnnotations;
//     console.log("Labels:");
//     labels.forEach((label)=>console.log(label.description));
// })
// .catch((err)=>{
//     console.error("ERROR:",err);
// });

// module.exports={
//     labelDetection
// }

module.export={
    detectLanguage,
    translateText
}