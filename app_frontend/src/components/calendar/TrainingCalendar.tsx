import React from "react";
import FullCalendar from "@fullcalendar/react";
import { EventInput } from "@fullcalendar/core";
import styled from "@emotion/styled";
import dayGridPlugin from "@fullcalendar/daygrid";
import jaLocale from "@fullcalendar/core/locales/ja";
import { format } from "date-fns";
import "./TrainingCalendar.css";
import moment from "moment";

const TrainingCalendar = (): JSX.Element => {
  // イベントを設定
  const events: EventInput[] = [
    {
      title: "TR@YCAC",
      start: format(new Date(), "yyyy-MM-dd"),
    },
  ];
  return (
    <div className="calendarWrapper">
      <FullCalendar
        plugins={[dayGridPlugin]}
        locales={[jaLocale]}
        locale="ja"
        firstDay={1}
        aspectRatio={1}
        headerToolbar={{
          left: "title",
          center: "",
          right: "prev,today,next",
        }}
        titleFormat={{ year: "numeric", month: "short" }}
        initialEvents={events}
        height="95%"
        //responsive={true}
        dayCellContent={(cell) => {
          const date = cell.date;
          const day = date.getDay();
          const formattedDate = date.getDate();

          let color;

          // 土曜日であれば青色、日曜日であれば赤色、それ以外は黒色
          switch (day) {
            case 0:
              color = "red";
              break;
            case 6:
              color = "blue";
              break;
            default:
              color = "black";
          }

          return <span style={{ color }}>{formattedDate}</span>;
        }}
      />
    </div>
  );
};

export default TrainingCalendar;
