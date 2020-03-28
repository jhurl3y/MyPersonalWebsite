import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import { experience, COLORS } from "../../../utils/constants";
import { Work, School } from "@material-ui/icons";

export default () => {
  const timelineContent = experience.map((position, i) => {
    const { color, type, date, title, location, tasks, skills } = position;

    return (
      <VerticalTimelineElement
        key={i}
        contentStyle={{ background: COLORS.lightBlue, color: COLORS.white }}
        contentArrowStyle={{ borderRight: `7px solid ${COLORS.lightBlue}` }}
        date={date}
        iconStyle={{ background: color, color: COLORS.white }}
        icon={type == "work" ? <Work /> : <School />}
      >
        <div>
          <h3>{title}</h3>
          <h4>{location}</h4>
          <p>{tasks}</p>
          {skills && <p>{skills}</p>}
        </div>
      </VerticalTimelineElement>
    );
  });

  return <VerticalTimeline>{timelineContent}</VerticalTimeline>;
};
