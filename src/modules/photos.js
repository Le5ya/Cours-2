const photos = () => {
  const commandPhoto = document.querySelectorAll('.command__photo');

    for(let i=0; i<=commandPhoto.length-1; i++){
      commandPhoto[i].addEventListener('mouseenter', (event) => {
        let tmp = event.target.src;
        event.target.src = event.target.dataset.img; 
        event.target.dataset.img = tmp; 
    });
      commandPhoto[i].addEventListener('mouseout', (event) => {
        let tmp = event.target.src;
        event.target.src = event.target.dataset.img; 
        event.target.dataset.img = tmp;    
    });
 }
};
export default photos;