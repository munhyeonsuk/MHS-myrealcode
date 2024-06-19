CREATE TABLE IF NOT EXISTS gnb (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    cls TEXT NOT NULL
);

-- Create the table for sub-items of gnb
CREATE TABLE IF NOT EXISTS gnb_ul_li (
    id INT AUTO_INCREMENT PRIMARY KEY,
    gnb_id INT NOT NULL,
    text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    FOREIGN KEY (gnb_id) REFERENCES gnb(id)
);
-- Insert data into gnb table
INSERT INTO gnb (text, href, cls) VALUES 
('경주 소개', 'intro.html', 'gnb_li px-5 position-relative py-3,gnb_a,gnb_ul position-absolute ps-0 pt-2'),
('여행 정보', 'tripInfo.html', 'gnb_li px-5 position-relative py-3,gnb_a,gnb_ul position-absolute ps-0 pt-2'),
('예약 및 문의', 'reser.html', 'gnb_li px-5 position-relative py-3,gnb_a,gnb_ul position-absolute ps-0 pt-2'),
('이벤트', 'event.html', 'gnb_li px-5 position-relative py-3,gnb_a,gnb_ul position-absolute ps-0 pt-2');

-- Insert data into gnb_ul_li table
-- For '경주 소개'
INSERT INTO gnb_ul_li (gnb_id, text, href) VALUES
(1, '역사 및 소개', 'history.html'),
(1, '지역 특산품', 'area.html');

-- For '여행 정보'
INSERT INTO gnb_ul_li (gnb_id, text, href) VALUES
(2, '관광지', 'tour.html'),
(2, '음식 및 카페', 'food.html'),
(2, '축제', 'fest.html'),
(2, '추천 코스', 'cours.html'),
(2, '여행 후기', 'triprev.html');

-- For '예약 및 문의'
INSERT INTO gnb_ul_li (gnb_id, text, href) VALUES
(3, '숙소 예약', 'hotel.html'),
(3, '패키지 여행 예약', 'package.html'),
(3, '문의사항', 'que.html'),
(3, '자주 묻는 문의', 'FAQ.html');

-- For '이벤트'
INSERT INTO gnb_ul_li (gnb_id, text, href) VALUES
(4, '진행중인 이벤트', 'eventnow.html');