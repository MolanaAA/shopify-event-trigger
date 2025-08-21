module.exports = (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle POST requests
  if (req.method === 'POST') {
    console.log('📊 Event received (POST):', req.body);
    
    res.status(200).json({ success: true });
    return;
  }

  // Method not allowed
  res.status(405).json({ error: 'Method not allowed' });
};
