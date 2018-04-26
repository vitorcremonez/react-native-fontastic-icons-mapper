<div align="center">
    <img src="https://i.imgur.com/IcMyFPB.png" width="400"/>
</div>


# React Native Fontastic Mapper

If you trying to integrate a react native project with a Fontastic icons font you probably having issue mapping the name of icon classes. 

To integrate react native projects with fontastic, the user has to set a styling as `FontFamily: 'your-fontastic-font-name'`, but by default you cannot call a icon calling it name.

This mapper will help you to integrate your fontastic font in your RN project without need of installing dependencies.

Just install your font, run this mapper code to generate you mapped name fonts, use it into your `Icon` component and enjoy.

So the usage of mapped names in your project will improve and have a clean look, for example:

From this:
```js
<Icon codeIcon={'\65'}/>
```

To this:
```js
<Icon name="car"/>
```

## Usage



Download you fontastic icons in fontastic website:
```
Download...
```

Now, link your `.ttf` file into your relative assets folder of your project.

```
./src/assets/fonts/you-fontastic-font.ttf
```
 
Change your `package.json` adding `rnpm` field to help link your font to your mobiles app projects folder:
 
```json
{
  "rnpm": {
    "assets": [
      "./src/assets/fonts/"
    ]
  }
}
```

Link your font to `Android` and `iOS` projects configuration typing:

```sh
react-native link
```


Clone the mapper project:
```
git clone git@github.com:vitorcremonez/react-native-fontastic-icons-mapper.git
```

Enter into directory:
```
cd react-native-fontastic-icons-mapper/
```

Install mapper's dependencies:
```
npm install
```

Now generate the mapped icons name `JSON` file mapping every single name of your icons to the respective character font.

```shell
node mapper.js --input-file /Users/vitorcremonez/Desktop/my-icons-font.svg --output-folder /Users/vitorcremonez/Desktop/
```

The last step has generated a json file called `mapped_font_names.json` that can be used to fuel a possible Icon component that will be able to receive by props the relative name class of your fontastic icon.
