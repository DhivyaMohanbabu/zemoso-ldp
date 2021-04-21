import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, Checkbox, DialogActions, Divider, FormControlLabel, Grid, TextField,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    maxWidth: '700px',
    mimWidth: '50px',
    minHeight: '100% - 20px',
  },
  dialogTitle: {
    color: theme.palette.clearedIn.grey[500],
    backgroundColor: theme.palette.clearedIn.grey[200],
  },
  modal: {
  },
  formRow: {
    height: '36px',
  },
  outlineInput: {
    padding: '10px 10px',
    height: '36px',
  },
  modalButton: {
    textTransform: 'none',
  },
  dialogActions: {
    justifyContent: 'center',
  },
}));

const domainNameInputProps = {
  maxLength: 50,
};

const handleReset = () => {
  document.getElementById('permission-form').reset();
};

const TrustGroupModal = ({
  isOpen, title, handleClose, handleSubmit, handleCheckBoxChange,
}) => {
  const classes = useStyles();
  return (
    <Dialog modal="true" open={isOpen} data-testid="modal">
      <DialogTitle className={classes.dialogTitle}>
        {title}
      </DialogTitle>
      <Divider />
      <DialogContent className={classes.modal}>
        <form id="permission-form" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
          <Grid container spacing={2} alignContent="baseline">
            <Grid item xs={12} sm={12}>
              <TextField
                name="domainName"
                type="name"
                fullWidth
                inputProps={domainNameInputProps}
                label="Name"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={(
                  <Checkbox
                    onChange={handleCheckBoxChange}
                    name="canView"
                    color="primary"
                  />
                )}
                label="View"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={(
                  <Checkbox
                    onChange={handleCheckBoxChange}
                    name="canEdit"
                    color="primary"
                  />
                )}
                label="Edit"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={(
                  <Checkbox
                    onChange={handleCheckBoxChange}
                    name="canComment"
                    color="primary"
                  />
                )}
                label="Comment"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={(
                  <Checkbox
                    onChange={handleCheckBoxChange}
                    name="canShare"
                    color="primary"
                  />
                )}
                label="Share"
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button
          color="primary"
          onClick={handleReset}
          data-testid="resetForm"
        >
          Reset
        </Button>
        <Button color="primary">
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

TrustGroupModal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleClose: PropTypes.func,
  handleCheckBoxChange: PropTypes.func,
};

TrustGroupModal.defaultProps = {
  isOpen: false,
  handleSubmit: undefined,
  handleClose: undefined,
  handleCheckBoxChange: undefined,
};

export default TrustGroupModal;
