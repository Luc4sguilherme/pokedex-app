export default function getBackGroundColor(type) {
  switch (type) {
    case 'ghost':
      return 'rgba(88, 106, 178, 0.5)';

    case 'dark':
      return 'rgba(97, 96, 113, 0.5)';

    case 'steel':
      return 'rgba(85, 154, 164, 0.5)';

    case 'fire':
      return 'rgba(255, 165, 79, 0.5)';

    case 'grass':
      return 'rgba(51, 189, 101, 0.5)';

    case 'electric':
      return 'rgba(245, 214, 74, 0.5)';

    case 'water':
      return 'rgba(92, 165, 219, 0.5)';

    case 'ice':
      return 'rgba(123, 209, 198, 0.5)';

    case 'ground':
      return 'rgba(216, 126, 77, 0.5)';

    case 'rock':
      return 'rgba(204, 189, 141, 0.5)';

    case 'fairy':
      return 'rgba(240, 154, 229, 0.5)';

    case 'poison':
      return 'rgba(171, 101, 201, 0.5)';

    case 'bug':
      return 'rgba(150, 195, 46, 0.5)';

    case 'dragon':
      return 'rgba(8, 112, 192, 0.5)';

    case 'psychic':
      return 'rgba(250, 123, 126, 0.5)';

    case 'flying':
      return 'rgba(154, 179, 229, 0.5)';

    case 'fighting':
      return 'rgba(211, 65, 99, 0.5)';

    default:
      return 'rgba(155, 159, 160, 0.5)';
  }
}
