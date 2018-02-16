import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

router.get('*', (req, res) => {
  res.status(404).end('Page Not Found');
});
export default router;
