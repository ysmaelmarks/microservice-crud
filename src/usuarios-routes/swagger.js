/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Retrieve a list of users
 *     description: Retrieve a list of users from API. 
 *     responses:
 *       200:
 *         description: working
*/

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Create a user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: the user's name
 *                 example: Ysmael Marques
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   nome:
 *                     type: string
 *                     description: The user's name.
 *                     example: Ysmael Marques
 *                   email:
 *                     type: string
 *                     description: The user's email.
 *                     example: user@email.com
 *                   login:
 *                     type: string
 *                     description: The user's login.
 *                     example: ysmaelmarks
 *                   senha:
 *                     type: string
 *                     description: The user's password.
 *                     example: 123456
*/

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Update a user.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: the user's name
 *                 example: Ysmael Marques
 *               email:
 *                 type: string
 *                 description: the user's email
 *                 example: ysmaelmarkss@gmail.com
 *               login:
 *                 type: string
 *                 description: the user's login
 *                 example: ysmaelmarks
 *               senha:
 *                 type: string
 *                 description: the user's senha
 *                 example: 1234
 *     responses:
 *       201:
 *         description: Updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   nome:
 *                     type: string
 *                     description: The user's name.
 *                     example: Ysmael Marques
 *                   email:
 *                     type: string
 *                     description: The user's email.
 *                     example: user@email.com
 *                   login:
 *                     type: string
 *                     description: The user's login.
 *                   senha:
 *                     type: string
 *                     description: The user's password.
 *                     example: 123456
*/

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Delete a user.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           required: true
 *     responses:
 *       201:
 *         description: Deleted
*/