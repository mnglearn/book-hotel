import fetch from 'node-fetch';

exports.handler = async (evt) => {
  const url = 'https://xxx.execute-api.eu-west-2.amazonaws.com/Prod/hotel';
  const {buyer_id, start_date, end_date, near} = evt;
  const params = new URLSearchParams();
  params.append('buyer_id', buyer_id);
  params.append('start_date', start_date);
  params.append('end_date', end_date);
  params.append('near', near);

  try {
    const response = await fetch(url,{method: 'POST', body: params})
    const data = await response.json();
    console.log(data);
    return data;
    
  } catch (e) {
      console.log(e);
      return e;
  }
}
