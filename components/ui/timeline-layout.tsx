import { Timeline, TimelineDescription, TimelineHeader, TimelineItem, TimelineTime, TimelineTitle } from "./timeline";

type TimelineItemType = {
  id: number,
  title: string,
  description: string,
  time: string,
}

const timelineData: TimelineItemType[] = [
  {
    id: 1,
    title: "Vai lol luon",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit ea esse!",
    time: "December, 2024"
  },
  {
    id: 2,
    title: "Vai lol luon",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit ea esse!",
    time: "December, 2024"
  }
]

export default function TimelineLayout() {
  return (
    <Timeline className="mt-10">
      {timelineData.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineHeader>
            <TimelineTime>{item.time}</TimelineTime>
            <TimelineTitle>{item.title}</TimelineTitle>
          </TimelineHeader>
          <TimelineDescription>{item.description}</TimelineDescription>
        </TimelineItem>
      ))}
    </Timeline>
  )
}