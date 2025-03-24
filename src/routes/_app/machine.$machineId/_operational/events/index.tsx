import { useEffect, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router'
import { Tabs } from 'antd';

export const Route = createFileRoute(
  '/_app/machine/$machineId/_operational/events/',
)({
  component: EventsList,
})

function EventsList() {
  const [events, setEvents] = useState<string[] | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      setEvents(null); // Simulate loading state
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Fake delay
      setEvents(Array.from({length: 20}, (_, i) => `Event ${i + 1}`)); // Generate 20 events
    };

    loadEvents();
  }, []);

  if (!events) {
    return <div>Loading events...</div>;
  }

  return (
    <Tabs.TabPane>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </Tabs.TabPane>
  );
}
