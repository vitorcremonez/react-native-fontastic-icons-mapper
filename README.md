<div align="left">
    <img src="https://i.imgur.com/g4Rt85m.png" width="600"/>
</div>

# React Native Fontastic Mapper

If you trying to integrate a react native project with a Fontastic icons font you probably having issue mapping the name of icon classes. 

To integrate react native projects with fontastic, the user has to set a styling as `FontFamily: 'your-fontastic-font-name'`, but by default you cannot call a icon calling it name.

This mapper will help you to integrate your fontastic font in your RN project without need of installing dependencies.

Just install your font, run this mapper code to generate you mapped name fonts, use it into your `Icon` component and enjoy.

So the usage of mapped names in your project will improve and have a clean look, for example:

From this:
```js
<Icon codeIcon={'\97'}/>
```

To this:
```js
<Icon name={'car'}/>
```

## Usage
Following this instructions to use fonstastic icons into your react native projects.
You will need to add your fontastic font and link the font to the RN project.
Generate the json mapped classes names file to use as dictionary in your RN Icon component.

### Install fontastic font
Download your fontastic icons in fontastic website:
<img src="https://i.imgur.com/M4XxPMn.png" width="350"/>

Add your `.ttf` file into your relative assets folder of your project:
<img src="https://i.imgur.com/QH75Mto.png" width="500"/>
```
./src/assets/fonts/you-fontastic-font.ttf
```




 
Change your `package.json` adding `rnpm` field to link your font to your mobiles app projects folder:
 
```json
{
  "rnpm": {
    "assets": [
      "./src/assets/fonts/"
    ]
  }
}
```

Link your font to `Android` and `iOS` projects configuration:

```sh
react-native link
```

Close simulators and reload your XCode or Android studio to apply the configuration font files.

Now you can use the icons styling your fontastic font family name.

```js
<Text style={{fontFamily:'my-font-name'}}>
    &#97;
</Text>
```

You can call the respective icon 

### Generate mapped icons classes



Clone the mapper project:
```
git clone git@github.com:vitorcremonez/react-native-fontastic-icons-mapper.git
```

Go into directory:
```
cd react-native-fontastic-icons-mapper/
```

Install mapper dependencies:
```
npm install
```

Now generate the mapped icons name `JSON` file mapping every single name of your icons to the respective character font.
<img src="https://i.imgur.com/un7Vfde.png" width="500"/>
```shell
node mapper.js --input-file /Users/vitorcremonez/Desktop/untitled folder/icons-myfont/fonts/icons-myfont.svg --output-folder /Users/vitorcremonez/Desktop/
```

The last step has generated a json file called `mapped_font_names.json` that can be used to fuel a possible Icon component that will be able to receive by props the relative name class of your fontastic icon.
