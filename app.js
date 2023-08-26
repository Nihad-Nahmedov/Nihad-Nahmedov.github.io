$(document).ready(function () {
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#myWeather").val()}&appid=012d3a58b4fd8ab58c50576d8d087fc1&units=metric`
            async function myweather() {
                let responce = await fetch(url)
                let data = await responce.json()
                $("#city").html(data.name)
                $("#temp").html(data.main.temp)
                $("#feels").html(data.main.feels_like)
                $("#myWeather").val("")
                console.log(data)
            }
            myweather()
        }
    })

    $("#btn").click(async function (e) {
        e.preventDefault();
        let url = `https://api24news-c2450314a63c.herokuapp.com/api/news?api_key=4b1a0e44-0205-4ad8-9158-3c10c3e87ae9`

        async function mynews() {
            let responce = await fetch(url);
            let data = await responce.json();

            for (let i = 0; i < data.news.length; i++) {
                $("#city").append(`<h4>${data.news[i].tit}</h4>`);
            }
        }

        await mynews()
    });
})
