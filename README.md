# Students on Stage - web

## Technologies Used

* [react-static](https://github.com/nozzle/react-static) - static site builder
* [Prismic](https://prismic.io) - CMS
* [Netlify](https://www.netlify.com/) - hosting & continuous integration

## Run Locally

1.  Clone this repository

    `$ git clone https://github.com/wouterlanduydt/studentsonstage`

2.  Install dependencies

    `$ yarn` or `$ npm install`

3.  Start development server

    `$ yarn start` or `$ npm start`

## How To Edit Content

Content is managed in [Prismic](https://prismic.io).

To edit the text, images and other content you'll want to go to `dashboard` > `Students on Stage` > `content` (on the left).

You'll see 3 content-types: **home_page**, **contact_page**, **footer** & **navbar**. Click the one you want to edit.

Please make sure to **NOT** edit `custom types` without asking the developer.

_After editing content don't forget to save and publish in the upper right corner._

### Media Library

Media can be managed in Prismic's `media library` (3rd icon in the menu bar on the left). In this case it will be mainly used for images (_allthough you can add PDF's here if you want users to be able to download a PDF after clicking a link for example_).

Add new images first, select them in the `content editor` and then remove unused images.

### Types

#### Images

The icons & logo should not be changed without permission.

It's not possible to change the header images and ornaments (_triangles on the sides_).

Prismic handles the **image dimensions**, but it's a good practice to upload images with the correct dimensions anyway.

| Image          | Dimensions |
| -------------- | :--------: |
| carousel image | 1120 x 720 |
| contact main   | 200 x 304  |
| contact thumb  |  56 x 56   |

Use [this online tool](http://optimizilla.com/nl/) to **reduce image size**. Your mobile visitors will thank you.

Everyone likes crispy images, so make sure to use high quality images as source and verify if the compressed image is not too pixelated.

#### Text

In some textfields it's possible to mark some keywords bold or insert links. If that's the case you'll see the available options at the top.

#### mailto URI schema

You're able to **customize the subject** of an email when the user clicks a link that opens his email client.

_For example:_ `mailto:someone@example.com?subject=Hello%20world` (_%20 is a space_)

### Restrictions

To make sure the layout doesn't break, some restricitons are necessary.

As a content editor you should not create more than:

* **3 intro-statistics**
* **10 carousel images**
* **3 opportunities**
* **4 contact people**

Allthough this is possible in the CMS, the website **will not** display more items than defined above. Only the **first** in the list will be displayed.

### Content rules and tips

* Use common sense and **don't make text longer than needed**. Users tend to just skip a textblock if it's not skimmable or too long. See [this article](https://www.nngroup.com/articles/how-little-do-users-read) if you want to learn more. Offcourse it's a good idea to mark some important keywords bold in a longer textblock.

* **Button text** should not be longer dan +- 20 characters.

* **CTA's** should be well thought-out. They need to be **descriptive** and **actionable** so that your users will interact with them. It's the main purpose of this website. More information can be found [here](https://litmus.com/blog/click-tap-and-touch-a-guide-to-cta-best-practices) (under designing a CTA > purpose & language).

## Questions?

Please shoot!

If anything is unclear I'll be happy to help you.

* Facebook: [Wouter Landuydt](https://www.facebook.com/wouter.landuydt)
* Email: [wouter.landuydt@gmail.com](mailto:wouter.landuydt@gmail.com)

## Found a bug?

Create an issue [here](https://github.com/wouterlanduydt/studentsonstage/issues). I'll look into it.
