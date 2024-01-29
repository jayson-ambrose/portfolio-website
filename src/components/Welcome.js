import React from 'react'
import { Grid, GridColumn, GridRow, Image } from 'semantic-ui-react'

function Welcome () {

    return(
        <Grid centered>
            <GridRow>
                <h2> Welcome! </h2>
            </GridRow>
            <GridColumn width={4}>                
            <p>
                My name is Jayson (I'm the one on the right). Thank you for visiting my portfolio. This site was created using
                JavaScript, React, CSS and Semantic UI. Check out some of my work with the 'Projects' tab in the
                menu above. Find ways to contact me and links to my social media in the 'Contact Me' tab.
                Coming soon, the 'Gadgets' tab will let you take a look at some tools that I've built from
                scratch.<br/><br/>

                I earned my certificate from Flatiron School's Software Engineering bootcamp where I learned web
                development skills over fifteen weeks. It is one of the most challenging things I've ever accomplished, but
                the software engineering knowledge I gained throughout is priceless.<br/><br/>                

                I am a full stack developer with experience building web applications using JavaScript and React. 
                I've also used Python and Flask to set up databases and APIs. For my final project at Flatiron School,
                I built a mobile application using React Native.<br/><br/>

                In my spare time, when I'm not watching hockey or football, I like to play Chess and Disc Golf. I'm a creative soul and like to do some cartooning and
                game development on the side.
            </p>
            </GridColumn>
            <GridColumn width={4}>
                <Image
                    src='https://cdn.discordapp.com/attachments/903670497445830719/1099533462186237972/IMG_20230422_211226.jpg?ex=65c83b55&is=65b5c655&hm=dddfd3ec099f973bc35445a5e885e0c2cb219bf0031f7c4c1e336ec3198cc773&'
                    size='medium'
                    alt='A cool looking web developer at Redrocks Amphitheater with a rad girl.'                    
                    />
            </GridColumn>
        </Grid>
    )
}

export default Welcome