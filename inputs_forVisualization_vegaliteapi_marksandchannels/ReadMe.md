> ## DataViz Week 3

- [x] Inputs for data visualization
  - [x] Data
    - [x] types of input
    - [x] types of attributes
  - [x] Tasks
- [x] Iterating with vega lite API
- [x] Marks and channels

## Three Major Data types

- tables
 - [x] Attributes i.e columns
 - [x] Items i.e rows

 - [x] Multideimensional tables(data cube example of multireligion people with different religion as key 1 and different language as key 2 while the religion itself refers ot values.)
   - [x] cube with faces having small compartments refers to values
   - [x] key1 and key2 refers to index that are cube's edges.
   - [x] attributes are the cube faces values.

- Networks
 - [x] with node and links b/w nodes.
 - [x] each node refers to item.

 - [x] trees
   - [x] like a network but the nodes are arranged at different levels.

- Spatial Data
  - [x] data that can be embeded like data that can be plotted on graph or map.

## Types of Attributes

- [x] Categorical(discrete)(discrete values with no natural ordering)
  - [x] like triangle,rectangle,circle shaped objects that can be differentiated on base of their shape and categorized , i.e objects differ with each other

- [x] Ordered(ordinal)(discrete values with specific pattern of repeating )
  - [x] like a collection of data of similar object but in different dimensions/scale like a shirt with different sizes.

- [x] Quantitative(attribute with numbers i.e specific values)
  - [x] like a collection of data of similar object but in different quantity like line segments that differ in lengths.

## Special cases

- [x] Time
  - [x] point in time
  - [x] region in time
- [x] Space
  - [x] point in space
  - [x] region in space


                     Point                     Region
     Space      latitude,longitude         Geographic identifiers
                  (Quantitative)           (countries,states,counties)
                                               (Categorical)  



     Time          Instant(right now)        Interval eg this year
                  (Quantitative)               (Ordinal)


     Quantity        Value                   Interval 5-10 yrs old
                      (eg-5.2)                  (Ordinal)
                    (Quantitative)

## Tasks (goals/direction/aim/what outcomes u are hoping for/what story u are telling/what is ur narrative about/what tasks the viewer of the data viz could perform)

***

## Vega Lite API
          PowerBI    plotly    TabLeau   spotfire qlicksense tibco    
                                 |
          ggplot2(best to develop little time)       Vega-lite-api(2019)    Altair
                                  |
                Semiotic        vega-lite    seaborn(python)
                                  |
                      VX         Vega    matplotlib(python)
                                  |
                        React     D3     Angular   pandas(python)
                                  |
                   HTML CSS SVG javascript DOM API's

- [x] As u move up the chain the flexibility to control complex interactions and customizability decreases.
- [x] the high level tools help to generate data viz components easier but with less control.
- [x] While their is always a room that u can build data viz from scratch via html,css,svg,javascript and DOM api's it is highly time consuming.

> ## Vega lite Observable

- [ ] Need to set up the vega lite api basic boilerplate and make a basic chart with some raw data.
