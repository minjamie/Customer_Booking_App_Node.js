# Customer_Booking_App_Node.js

## ⛳️ 목표

: 고객이 예약을 잡을 수 있는 `DayTimetable` 리스트를 반환하는 **API**를 개발하기

👉 API가 사용되는 실제 서비스 상황의 스크린샷 (고객이 업체에 예약할때 사용하는 웹앱)
![](https://images.velog.io/images/minj9_6/post/ee6b678b-b5c3-4b48-b471-4a75d8a84651/image.png)

### step 1

- `start_day_identifier,` `timezone_identifier`, `service_duration`, `days`,`timeslot_interval`
- 위에 파라미터에 따른 `DayTimetable` 반환 하는 API 구현

### step 2

- `is_ignore_schedule:false`인 경우 구현
- `is_ignore_schedule:false`인 경우 주어진 `events.json` 파일을 참조하여 `Event`데이터와 겹치지 않는 `Timeslot`을 반환 합니다.

### step3

- `is_ignore_workhour:false`인 경우 구현
- `is_ignore_workhour:false`인 경우 주어진 `workhours.json`파일을 참조하여 `Workhour`와 겹치지 않는 `Timeslot`을 반환합니다.
