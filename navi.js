const hd ={
    gnb : [
        {
        Text : "경주 소개",
        href : "intro.html",
        cls : ["gnb_li px-5 position-relative py-3","gnb_a","gnb_ul position-absolute ps-0 pt-2"],
        gnb_ul_li : [
            {
                Text : "역사 및 소개",
                href : "history.html",
               
            },
            {
                Text : "지역 특산품",
                href : "area.html"
            }
        ]
    },
    {
        Text : "여행 정보",
        href : "tripInfo.html",
        cls : ["gnb_li px-5 position-relative py-3","gnb_a","gnb_ul position-absolute ps-0 pt-2"],
        gnb_ul_li : [
            {
                Text : "관광지",
                href : "tour.html"
            },
            {
                Text : "음식 및 카페",
                href : "food.html"
            },
            {
                Text : "축제",
                href : "fest.html"
            },
            {
                Text : "추천 코스",
                href : "cours.html"
            },
            {
                Text : "여행 후기",
                href : "triprev.html"
            },

        ]
    },
    {
        Text : "예약 및 문의",
        href : "reser.html",
        cls : ["gnb_li px-5 position-relative py-3","gnb_a","gnb_ul position-absolute ps-0 pt-2"],
        gnb_ul_li : [
            {
                Text : "숙소 예약",
                href : "hotel.html"
            },
            {
                Text : "패키지 여행 예약",
                href : "package.html"
            },
            {
                Text : "문의사항",
                href : "que.html"
            },
            {
                Text : "자주 묻는 문의",
                href : "FAQ.html"
            },
        ]
    },
    {
        Text : "이벤트",
         cls : ["gnb_li px-5 position-relative py-3","gnb_a","gnb_ul position-absolute ps-0 pt-2"],
        href : "event.html",
        gnb_ul_li : [
            {
                Text : "진행중인 이벤트",
                href : "eventnow.html"
            },
        ]
    }
    ],
    searchMenu : [
        {
            Text : "실시간인기",
            cls : ["dropdownbox m-0", "text-end pb-1", "", "searchPopular pt-2 mb-1 text-black-50", "searchTop10 d-flex", "ps-0","m-0"],
            searchMenu_text : [
                {
                    Text : "1. 관광지",
                    href : "tour.html",
                },
                {
                    Text : "2. 카페",
                    href : "cafe.html",
                },
                {
                    Text : "3. 패키지 여행 예약",
                    href : "package.html",
                },
                {
                    Text : "4. 추천 코스",
                    href : "corse.html",
                },
                {
                    Text : "5. 맛집",
                    href : "rest.html",
                },
                {
                    Text : "6. 황남빵",
                    href : "bread.html",
                },
                {
                    Text : "7. 경주월드",
                    href : "amuse.html",
                },
                {
                    Text : "8. 호텔",
                    href : "hotel.html",
                },
                {
                    Text : "9. 한복 대여",
                    href : "hanbok.html",
                },
                {
                    Text : "10. 야경",
                    href : "night.html",
                }
            ]
        },
    ]
}



window.onload = function(){
    let navitag = "";

    for(x in hd.gnb){
        navitag += `<li class="${hd.gnb[x].cls[0]}">
        <a href='${hd.gnb[x].href}' class="${hd.gnb[x].cls[1]}">
        ${hd.gnb[x].Text}
        </a>`;

        navitag += `<ul class="${hd.gnb[x].cls[2]}">`;
        for(j in hd.gnb[x].gnb_ul_li){
            navitag +=`<li>
            <a href='${hd.gnb[x].gnb_ul_li[j].href}'>
                 ${hd.gnb[x].gnb_ul_li[j].Text}
            </a>
            </li>`
        }
        navitag += `</ul>`
        navitag += `</li>`
    }
    document.querySelector("#gnb").innerHTML = navitag;


 
}
