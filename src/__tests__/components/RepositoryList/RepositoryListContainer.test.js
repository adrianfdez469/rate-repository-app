import { render } from '@testing-library/react-native';
import { MemoryRouter } from 'react-router-native';
import RepositoryListContainer from '../../../components/RepositoryList/RepositoryListContainer'
import { parseNumberToThousens } from '../../../components/RepositoryList/RpositoryItem';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('should convert numbers to K', () => {
      expect(parseNumberToThousens(21856)).toBe('21.8k');
    })
    it('renders repository information correctly', async () => {

      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const fetchSort = jest.fn()
      const { getAllByTestId, getAllByText } = render(<MemoryRouter><RepositoryListContainer repositories={repositories} fetchSort={fetchSort}/></MemoryRouter>)
      const cardItems = getAllByTestId('card');
      expect(cardItems).toHaveLength(2);

      expect(getAllByText(repositories.edges[0].node.description)).toBeDefined();
      expect(getAllByText(repositories.edges[0].node.fullName)).toBeDefined();
      expect(getAllByText(repositories.edges[0].node.language)).toBeDefined();
      expect( getAllByText('1.6k')).toBeDefined();
      expect( getAllByText('21.8k')).toBeDefined();
      expect( getAllByText('88')).toBeDefined();
      expect( getAllByText('3')).toBeDefined();
      
      
      expect(getAllByText(repositories.edges[1].node.description)).toBeDefined();
      expect(getAllByText(repositories.edges[1].node.fullName)).toBeDefined();
      expect(getAllByText(repositories.edges[1].node.language)).toBeDefined();
      expect( getAllByText('69')).toBeDefined();
      expect( getAllByText('1.7k')).toBeDefined();
      expect( getAllByText('72')).toBeDefined();
      expect( getAllByText('3')).toBeDefined();
      

      




    });
  });
});