import pictures from '../assets/pictures.json' assert {type: 'json'};

const CardArray = () => {

    const pictures_set = new Set();

    const return_arry = new Array(24);

    const setRandomPositions = new Set();

    while (pictures_set.size != 12) {
        pictures_set.add(Math.floor(Math.random() * 103) + 1);
    }
    function PlaceThePictures(index) {
        // import imagesrc from '../assets/yandex.png';

        while (true) {
            let randomindex = Math.floor(Math.random() * 24);
            if (!setRandomPositions.has(randomindex)) {
                setRandomPositions.add(randomindex)
                // ({ index: i, name: imagesrc, checked: false }); src\assets\images
                // import pic from `../assets/images/${pictures[index]}`; 
                return_arry[randomindex] = { index: randomindex, name: `src/assets/images/${pictures[index]}`, checked: true }
                break;
            }
        }

        while (true) {
            let randomindex = Math.floor(Math.random() * 24);
            if (!setRandomPositions.has(randomindex)) {
                setRandomPositions.add(randomindex)
                return_arry[randomindex] = { index: randomindex, name: `src/assets/images/${pictures[index]}`, checked: true }

                break;
            }
        }
    }
    pictures_set.forEach(PlaceThePictures)

    return return_arry;
}
export default CardArray;