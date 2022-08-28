import { Stack, SxProps, Typography } from "@mui/material";
import { IFetchResult } from "api/fetchApi";

export interface IFetchingProgressProps<T> {
  fetchResponse: IFetchResult<T>;
  sx?: SxProps;
}
export const FetchingProgress = <T,>({
  fetchResponse,
  sx,
}: IFetchingProgressProps<T>) => {
  return fetchResponse.isFetching || fetchResponse.isError ? (
    <Stack sx={{ textAlign: "center", ...sx }}>
      <>
        {fetchResponse.isFetching && <Typography>Загружаем...</Typography>}
        {fetchResponse.isError && <Typography>Ошибка загрузки</Typography>}
      </>
    </Stack>
  ) : null;
};
