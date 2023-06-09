import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import styled from "styled-components";

const PriceList = styled.ul``;

const PriceData = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 7px 12px;
  border-bottom: 1px solid ${(props) => props.theme.textColor};
`;

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface PriceProps {
  coinId: string;
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["price", coinId],
    () => fetchCoinHistory(coinId),
    {
      // refetchInterval: 10000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading Price..."
      ) : (
        <PriceList>
          {data?.slice(0, 100).map((price) => (
            <PriceData key={price.time_open}>
              <p>{new Date(price.time_close).toDateString()}</p>
              <p>
                {price.open} ~ {price.close}
              </p>
            </PriceData>
          ))}
        </PriceList>
      )}
    </div>
  );
}

export default Price;
