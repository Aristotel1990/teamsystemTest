import { format, getTime, formatDistanceToNow } from 'date-fns';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

export function fDate(date) {
  return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateTime(date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fTimestamp(date) {
  return getTime(new Date(date));
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}
export function fDateTimeRaport(date) {
  return format(new Date(date), 'yyyy-MM-dd');
}
export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true
  });
}
export function formatStatus(status) {
  switch (status) {
    case 'Completed':
      return <Typography color="green">Dorëzuar</Typography>;
    case 'Rejected':
      return <Typography color="red">Refuzuar</Typography>;
    case 'In Transit':
      return <Typography color="blue">Në proçes</Typography>;
    case 'Kthyer':
      return <Typography color="darkorange">Kthyer</Typography>;
    case 'OnLikuid':
      return <Typography color="yellow">Për Likuidim</Typography>;

    case 'Likuiduar':
      return <Typography color="darkorchid">Likuiduar</Typography>;
    case 'Ne Magazine':
      return <Typography color="steelblue">Magazinuar</Typography>;
    case 'Order Created':
      return <Typography color="teal">Porosi e krijuar</Typography>;
    case 'toCourier':
      return <Typography color="teal">Për Korierin</Typography>;
    case 'toPickUpFromCourier':
      return <Typography color="teal">PickUp-Korieri</Typography>;
    case 'pickedFromCourier':
      return <Typography color="teal">Picked-Korieri</Typography>;
    case 'pickedFromClient':
      return <Typography color="teal">Picked-Klienti</Typography>;
    case 'Ndërrim':
      return <Typography color="darkorange">Ndërrim</Typography>;
    default:
      return <Typography color="blue">ddddddddddd</Typography>;
  }
}
export function formatAcountStatus(type) {
  if (type === 'Order Created') {
    return 'U krijua';
  }
  if (type === 'Ne Magazine') {
    return 'Vendodhja :';
  }
  if (type === 'Completed') {
    return 'U dorezua';
  }
  if (type === 'Rejected') {
    return 'U refuzua';
  }
  if (['pickedInClient', 'toCourier'].includes(type)) {
    return 'Ne shperndarje';
  }
  if (type === 'toPickUpFromCourier') {
    return 'Ne shperndarje';
  }
  if (type === 'Likuiduar') {
    return 'U Likuidua';
  }
  if (type === 'Kthyer') {
    return 'U Kthye';
  }
  return 'Ne shperndarje';
}
