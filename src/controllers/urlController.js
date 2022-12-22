export async function createUrlShort(req, res) {
    
    try {
        
      res.sendStatus(201);
    } catch (errr) {
      res.status(500).send(errr.message);
    }
  }