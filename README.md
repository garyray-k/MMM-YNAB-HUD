# MMM-YNAB-HUD

This is a You Need A Budget (YNAB) Heads Up Display (HUD) for the [MagicMirror](https://github.com/MichMich/MagicMirror) which uses the [YNAB API](https://api.youneedabudget.com/) (specifically the [YNAB SDK JS](https://github.com/ynab/ynab-sdk-js)) to periodically update and display budget categories.

## Installation

1. Navigate to your `MagicMirror/modules` folder. It should at least already contain the folders `default` and `node_modules` with a `README.md` and `package-lock.json` file.

2. Clone this repository into the modules folder. `git clone https://github.com/garyray-k/MMM-YNAB-HUD.git`

3. Register this module in your `MagicMirror/config/config.js` file:

   ```javascript
            module: "MMM-YNAB-HUD",
            position: "bottom_bar",
            config: {
                apiKey: "YOUR-YNAB-API-KEY-HERE"
            },
    ```

4. Run your MagicMirror to confirm it works!
