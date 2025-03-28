import { useEffect, useState } from 'react';

export function EventsList() {
  const [events, setEvents] = useState<string[] | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      setEvents(null);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setEvents(Array.from({length: 20}, (_, i) => `Event ${i + 1}`));
    };

    loadEvents();
  }, []);

  if (!events) {
    return <div>Loading events...</div>;
  }

  return (
    <div>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
}
