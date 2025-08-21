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

  // Handle GET requests
  if (req.method === 'GET') {
    console.log('📊 Event received (GET):', req.query);
    console.log('📊 GET Headers:', req.headers);
    
    // Check for cart events in GET requests
    if (req.query.event_name === 'product_added_to_cart') {
      console.log('🛒 Cart Event (GET):', {
        event: req.query.event_name,
        data: req.query,
        timestamp: new Date().toISOString()
      });
    }
    
    // Return 1x1 transparent GIF
    const pixel = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');
    res.setHeader('Content-Type', 'image/gif');
    res.status(200).send(pixel);
    return;
  }

  // Handle POST requests
  if (req.method === 'POST') {
    console.log('📊 Event received (POST):', req.body);
    console.log('📊 Headers:', req.headers);
    console.log('📊 URL:', req.url);
    
    // Log specific cart events
    if (req.body.event_name === 'add_to_cart' || req.body.event_name === 'product_added_to_cart') {
      console.log('🛒 Cart Event:', {
        event: req.body.event_name,
        data: req.body.event_data,
        timestamp: new Date().toISOString()
      });
    }
    
    res.status(200).json({ success: true });
    return;
  }

  // Method not allowed
  res.status(405).json({ error: 'Method not allowed' });
};
