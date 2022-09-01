import { makeStyles } from '@material-ui/core/styles';
import React, { useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import { XPathTablePagination, AriaLabel } from 'types/table';
import styles from './TablePaginationActions.styles';

interface Props {
  isTotalKnown: boolean;
  disableNextPage?: boolean;
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
  'data-xpath'?: XPathTablePagination,
  ariaLabel: AriaLabel
}

const useStyles = makeStyles(styles, { name: 'TablePaginationActions' });

export default function TablePaginationActions(
  props: Props,
) {
  const classes = useStyles();
  const {
    isTotalKnown,
    disableNextPage,
    count,
    page,
    rowsPerPage,
    onChangePage,
    ariaLabel,
    'data-xpath': dataXpath,
  } = props;

  const handleFirstPageButtonClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    onChangePage(event, 0);
  }, [onChangePage]);

  const handleBackButtonClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    onChangePage(event, page - 1);
  }, [onChangePage, page]);

  const handleNextButtonClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    onChangePage(event, page + 1);
  }, [onChangePage, page]);

  const handleLastPageButtonClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }, [onChangePage, count, rowsPerPage]);

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label={ariaLabel.firstPage}
        data-xpath={dataXpath?.tableFirstPage}
        className={classes.button}
      >
        <FirstPageIcon />
      </IconButton>

      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label={ariaLabel.prevPage}
        data-xpath={dataXpath?.tablePrevPage}
        className={classes.button}
      >
        <KeyboardArrowLeft />
      </IconButton>

      <IconButton
        onClick={handleNextButtonClick}
        disabled={disableNextPage || page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label={ariaLabel.nextPage}
        data-xpath={dataXpath?.tableNextPage}
        className={classes.button}
      >
        <KeyboardArrowRight />
      </IconButton>

      {
        isTotalKnown && (
          <IconButton
            onClick={handleLastPageButtonClick}
            disabled={disableNextPage || page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label={ariaLabel.lastPage}
            data-xpath={dataXpath?.tableLastPage}
            className={classes.button}
          >
            <LastPageIcon />
          </IconButton>
        )
      }
    </div>
  );
}
