## Installation

* Download the theme from GitHub.
* Run `bower install`
* Upload the theme as described in the [Ghost Documentation](http://docs.ghost.org/usage/settings/). (tl; dr: make a zip of the folder and upload it through the Ghost blog admin dashboard)

## Local installation

* [Download Ghost](https://ghost.org/download/) and [get it working](http://support.ghost.org/getting-started/)
* From the root of your Ghost folder, run:

```
git clone https://github.com/makersacademy/makers-blog-theme.git content/themes/makers-blog-theme
```

* `cd content/themes/makers-blog-theme`
* `bower install`
* navigate back to the root of your Ghost folder and run `npm start`
* To reach your blog's settings in the dashboard visit [http://localhost:2368/ghost/settings/general/](http://localhost:2368/ghost/settings/general/)
* Select the theme `makers-blog-theme - <version number>`
* Install some sample content as outlined [https://allaboutghost.com/easy-theme-development-with-sample-ghost-content/](here)
* Ready to rock.

## Publishing

* Make sure it works locally - you can only publish if you have run `bower install`
* Update the version number in `package.json`
* Make sure you have a `.env` file - details in LastPass
* `grunt`
