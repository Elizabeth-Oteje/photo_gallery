// const photoApiUrl = fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5")
const photoApiUrl = fetch("https://picsum.photos/v2/list?page=2&limit=10")

console.log(photoApiUrl);
photoApiUrl.then(data => data.json())
.then(data => {
    let photos = '';
    data.forEach(function(photo){
        photos += `<div class="col-lg-4 col-md-4 col-sm-12">
        <div class="card">
        <img src="${photo.download_url}" class="card-img-top"alt=""height="200px"/>
        <p class="text-white card-btn"><a href="#">${photo.author}</a></p>
        </div>
        </div>
        `;
    });
    document.getElementById('photos').innerHTML = photos;
})
//to catch errors if theres network failure
.catch( function (error){
    console.log(error);
    
})

