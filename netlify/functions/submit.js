exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
  const AIRTABLE_BASE  = 'appx5kSOVbuQkOGKS';
  const AIRTABLE_TABLE = 'tblTnm42Kvzeb9cNr';

  try {
    const raw = JSON.parse(event.body);

    const txt = (key) => {
      const v = raw[key];
      return (v && String(v).trim() !== '') ? String(v).trim() : undefined;
    };

    const num = (key) => {
      const v = parseInt(raw[key]);
      return (!isNaN(v) && v > 0) ? v : undefined;
    };

    // Send ONLY text fields first — no numbers, no selects
    const fields = {};

    if (txt('fldNhyj1ArvYFmuIy')) fields['fldNhyj1ArvYFmuIy'] = txt('fldNhyj1ArvYFmuIy');
    if (txt('fldOXcYyBTNTsaeRZ')) fields['fldOXcYyBTNTsaeRZ'] = txt('fldOXcYyBTNTsaeRZ');
    if (txt('fldraMdpbtwuMyIFQ')) fields['fldraMdpbtwuMyIFQ'] = txt('fldraMdpbtwuMyIFQ');
    if (txt('fldg5zE4HYVsQjZcq')) fields['fldg5zE4HYVsQjZcq'] = txt('fldg5zE4HYVsQjZcq');
    if (txt('fldTcfqYhCKcXPchj')) fields['fldTcfqYhCKcXPchj'] = txt('fldTcfqYhCKcXPchj');
    if (txt('fld9TNtj1vrYmhlsJ')) fields['fld9TNtj1vrYmhlsJ'] = txt('fld9TNtj1vrYmhlsJ');
    if (txt('fldiKiqyUNDlxilst')) fields['fldiKiqyUNDlxilst'] = txt('fldiKiqyUNDlxilst');
    if (txt('fldWWnVpMzB69fZ8Q')) fields['fldWWnVpMzB69fZ8Q'] = txt('fldWWnVpMzB69fZ8Q');
    if (txt('fldnuQ06C8SiN4jxY')) fields['fldnuQ06C8SiN4jxY'] = txt('fldnuQ06C8SiN4jxY');
    if (txt('fldxlUKwzPJM1Do0l')) fields['fldxlUKwzPJM1Do0l'] = txt('fldxlUKwzPJM1Do0l');
    if (txt('fldeSFiRnHrEzGOvd')) fields['fldeSFiRnHrEzGOvd'] = txt('fldeSFiRnHrEzGOvd');
    if (txt('fldntUtenMfRiRJhw')) fields['fldntUtenMfRiRJhw'] = txt('fldntUtenMfRiRJhw');
    if (txt('fldtqLkhHP6BetBCk')) fields['fldtqLkhHP6BetBCk'] = txt('fldtqLkhHP6BetBCk');
    if (txt('fldYzMCyxVsRCBuC7')) fields['fldYzMCyxVsRCBuC7'] = txt('fldYzMCyxVsRCBuC7');
    if (txt('fldgo1OTHkHunKrnR')) fields['fldgo1OTHkHunKrnR'] = txt('fldgo1OTHkHunKrnR');
    if (txt('fldmNz3jpHiaDojfp')) fields['fldmNz3jpHiaDojfp'] = txt('fldmNz3jpHiaDojfp');
    if (txt('fldaYTULMYf28kTEq')) fields['fldaYTULMYf28kTEq'] = txt('fldaYTULMYf28kTEq');
    if (txt('fldXeFSf14RdMBDxU')) fields['fldXeFSf14RdMBDxU'] = txt('fldXeFSf14RdMBDxU');
    if (txt('fldAxcLWMwNobyVg4')) fields['fldAxcLWMwNobyVg4'] = txt('fldAxcLWMwNobyVg4');
    if (txt('fldp8ed8tDyzj11pf')) fields['fldp8ed8tDyzj11pf'] = txt('fldp8ed8tDyzj11pf');
    if (txt('fldVxqffADSUHeZo7')) fields['fldVxqffADSUHeZo7'] = txt('fldVxqffADSUHeZo7');
    if (txt('fldUBo6yCvWMJfydt')) fields['fldUBo6yCvWMJfydt'] = txt('fldUBo6yCvWMJfydt');
    if (txt('fldagDt6NbfISAY1Q')) fields['fldagDt6NbfISAY1Q'] = txt('fldagDt6NbfISAY1Q');
    if (txt('fldzjCUeVkWWlbC9S')) fields['fldzjCUeVkWWlbC9S'] = txt('fldzjCUeVkWWlbC9S');
    if (txt('fldaq49TRRTNFuGT0')) fields['fldaq49TRRTNFuGT0'] = txt('fldaq49TRRTNFuGT0');
    if (txt('fldfxohLLz0zc7j8X')) fields['fldfxohLLz0zc7j8X'] = txt('fldfxohLLz0zc7j8X');
    if (txt('fldZYBwn4fmusfL77')) fields['fldZYBwn4fmusfL77'] = txt('fldZYBwn4fmusfL77');

    // Number fields
    if (num('fldQA5RCZvCq61yN2')) fields['fldQA5RCZvCq61yN2'] = num('fldQA5RCZvCq61yN2');
    if (num('fldshgh2MIub4EK3j')) fields['fldshgh2MIub4EK3j'] = num('fldshgh2MIub4EK3j');
    if (num('flduKfbu8lz5WMNx3')) fields['flduKfbu8lz5WMNx3'] = num('flduKfbu8lz5WMNx3');
    if (num('fldyxBxkY12VOiGOB')) fields['fldyxBxkY12VOiGOB'] = num('fldyxBxkY12VOiGOB');
    if (num('fld4d4nCPbKGTB6lp')) fields['fld4d4nCPbKGTB6lp'] = num('fld4d4nCPbKGTB6lp');
    if (num('fldhTXFqgpHwcsmV0')) fields['fldhTXFqgpHwcsmV0'] = num('fldhTXFqgpHwcsmV0');
    if (num('fldRFQa91p8JsBV85')) fields['fldRFQa91p8JsBV85'] = num('fldRFQa91p8JsBV85');
    if (num('fldaCU4P5PmMLJGK7')) fields['fldaCU4P5PmMLJGK7'] = num('fldaCU4P5PmMLJGK7');
    if (num('fldZnpHczY4bECsg5')) fields['fldZnpHczY4bECsg5'] = num('fldZnpHczY4bECsg5');
    if (num('fld1Hx0QALwupkt3a')) fields['fld1Hx0QALwupkt3a'] = num('fld1Hx0QALwupkt3a');
    if (num('fldtQaERpApvVELg1')) fields['fldtQaERpApvVELg1'] = num('fldtQaERpApvVELg1');
    if (num('fldCsrYxg16GquCSI')) fields['fldCsrYxg16GquCSI'] = num('fldCsrYxg16GquCSI');
    if (num('fldkFDQtUGdBp1T0'))  fields['fldkFDQtUGdBp1T0']  = num('fldkFDQtUGdBp1T0');
    if (num('fldfkNvu9L6F5efko')) fields['fldfkNvu9L6F5efko'] = num('fldfkNvu9L6F5efko');
    if (num('fldmSYGn0qt0vQ7WW')) fields['fldmSYGn0qt0vQ7WW'] = num('fldmSYGn0qt0vQ7WW');

    console.log('Sending', Object.keys(fields).length, 'fields to Airtable');

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fields })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('AIRTABLE REJECTION DETAILS:', JSON.stringify(data, null, 2));
      // Return the FULL Airtable error to the browser so we can see it
      return {
        statusCode: response.status,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          error: true,
          airtable_error: data,
          fields_sent: Object.keys(fields)
        })
      };
    }

    console.log('Success! Record:', data.id);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, id: data.id })
    };

  } catch (err) {
    console.error('Function error:', err.message);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
