import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, DialogActions, Divider, Grid, TextField,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DropDown from '../DropDown';

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    maxWidth: '500px',
    minHeight: '100% - 20px',
  },
  dialogTitle: {
    color: theme.palette.clearedIn.grey[500],
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

const trustScoreInputProps = {
  min: 0,
  max: 1000,
  step: 10,
  defaultValue: 0,
};

const emailInputProps = {
  maxLength: 50,
};

const domainInputProps = {
  maxLength: 50,
};

const DomainModal = ({
  isOpen, title, trustGroups, handleClose, handleSubmit, handleReset,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      modal="true"
      open={isOpen}
    >
      <DialogTitle className={classes.dialogTitle}>
        {title}
      </DialogTitle>
      <Divider />
      <DialogContent className={classes.modal}>
        <form onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
          <Grid container spacing={2} alignContent="baseline">
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                type="email"
                inputProps={emailInputProps}
                label="Email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="domain"
                type="text"
                label="Domain"
                inputProps={domainInputProps}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="trustScore"
                type="number"
                inputProps={trustScoreInputProps}
                label="TrustScore"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DropDown
                names={trustGroups}
                label="Relationship"
                isSecurityDropDown="true"
                labelFlag="true"
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button
          className={classes.modalButton}
          color="primary"
          size="large"
          onClick={handleReset}
        >
          Reset
        </Button>
        <Button
          className={classes.modalButton}
          color="primary"
          size="large"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          className={classes.modalButton}
          color="primary"
          size="large"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DomainModal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  trustGroups: PropTypes.arrayOf(Object).isRequired,
  handleSubmit: PropTypes.func,
  handleClose: PropTypes.func,
  handleReset: PropTypes.func,
};

DomainModal.defaultProps = {
  isOpen: false,
  handleSubmit: undefined,
  handleClose: undefined,
  handleReset: undefined,
};

export default DomainModal;
