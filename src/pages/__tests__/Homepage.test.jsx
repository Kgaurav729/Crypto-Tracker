import { render, screen, waitFor } from '@testing-library/react';
import Homepage from '../Homepage';
import * as service from '../../services/cryptoService';

vi.mock('../../services/cryptoService');

const mockData = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: 'btc.png',
    price: 3000000,
    change24h: 2.5,
    change7d: 5.2,
  },
];

describe('Homepage', () => {
  it('renders crypto cards based on fetched data', async () => {
    service.fetchCryptoData.mockResolvedValue(mockData);
    render(<Homepage />);

    await waitFor(() => {
      expect(screen.getByText('Bitcoin')).toBeInTheDocument();
      expect(screen.getByTestId('price')).toHaveTextContent('₹ 30,00,000');
      expect(screen.getByTestId('change-24h')).toHaveTextContent('24h: 2.5%');
    });
  });
});
