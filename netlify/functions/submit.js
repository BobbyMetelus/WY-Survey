exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
  const AIRTABLE_BASE  = 'appx5kSOVbuQkOGKS';
  const AIRTABLE_TABLE = 'tblTnm42Kvzeb9cNr';

  try {
    const rawFields = JSON.parse(event.body);

    // TEST MODE — only send the Name field to confirm connection works
    const testFields = {
      'fldNhyj1ArvYFmuIy': rawFields['fldNhyj1ArvYFmuIy'] || 'TEST'
    };

    console.log('TEST: Sending only Name field:', JSON.stringify(testFields));

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fields: testFields })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Airtable error:', JSON.stringify(data));
      return {
        statusCode: response.status,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: data })
      };
    }

    console.log('Success! Record ID:', data.id);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, id: data.id })
    };

  } catch (err) {
    console.error('Error:', err.message);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
