import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent {
  title = {
    first: 'Μουσική',
    secondary: 'Οι πιο δημοφιλείς συναυλίες',
  };
  items = [
    {
      title: 'Card 1',
      category: 'Category 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'assets/images/1.jpg',
      header_image: 'assets/images/header/1.jpg',
      url: '/theatre/reservation',
      date: 'July 15-16, 2023',
      location: 'Example Venue',
      tickets: [
        {
          time: '16:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '16:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '16:30',
          date: 'July 16, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '16:30',
          date: 'July 16, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
      ],
    },
    {
      title: 'Card 2',
      category: 'Category 2',
      description:
        'Nulla gravida, sem et pretium imperdiet, lectus urna dignissim enim.',
      image: 'assets/images/2.jpg',
      header_image: 'assets/images/header/2.jpg',
      url: '/theatre/reservation',
      date: 'July 30, 2023',
      location: 'Example Venue',
      tickets: [
        {
          time: '16:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '16:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '16:30',
          date: 'July 16, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '16:30',
          date: 'July 16, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
      ],
    },
    {
      title: 'Card 3',
      category: 'Category 3',
      description:
        'Nulla gravida, sem et pretium imperdiet, lectus urna dignissim enim.',
      image: 'assets/images/3.jpg',
      header_image: 'assets/images/header/3.jpg',
      url: '/theatre/reservation',
      date: 'July 30, 2023',
      location: 'Example Venue',
      tickets: [
        {
          time: '16:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '16:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '16:30',
          date: 'July 16, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '16:30',
          date: 'July 16, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
      ],
    },
    {
      title: 'Card 4',
      category: 'Category 4',
      description:
        'Nulla gravida, sem et pretium imperdiet, lectus urna dignissim enim.',
      image: 'assets/images/4.jpg',
      header_image: 'assets/images/header/4.jpg',
      url: '/theatre/reservation',
      date: 'July 30, 2023',
      location: 'Example Venue',
      tickets: [
        {
          time: '16:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '16:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '16:30',
          date: 'July 16, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '16:30',
          date: 'July 16, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
      ],
    },
    {
      title: 'Card 5',
      category: 'Category 5',
      description:
        'Nulla gravida, sem et pretium imperdiet, lectus urna dignissim enim.',
      image: 'assets/images/5.jpg',
      header_image: 'assets/images/header/5.jpg',
      url: '/theatre/reservation',
      date: 'July 30, 2023',
      location: 'Example Venue',
      tickets: [
        {
          time: '16:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '16:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '16:30',
          date: 'July 16, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '16:30',
          date: 'July 16, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
      ],
    },
    {
      title: 'Card 6',
      category: 'Category 6',
      description:
        'Nulla gravida, sem et pretium imperdiet, lectus urna dignissim enim.',
      image: 'assets/images/6.jpg',
      header_image: 'assets/images/header/6.jpg',
      url: '/theatre/reservation',
      date: 'July 30, 2023',
      location: 'Example Venue',
      tickets: [
        {
          time: '16:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '16:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '16:30',
          date: 'July 16, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '16:30',
          date: 'July 16, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '18:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 6,
          type: 'normal',
          seats: 15,
        },
        {
          time: '20:30',
          date: 'July 15, 2023',
          price: 3,
          type: 'social',
          seats: 5,
        },
      ],
    },
    // Add more items as needed
  ];
}
