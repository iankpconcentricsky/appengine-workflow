#### check for command line arg
ID=$1
CAMEL=$2
ORIG_DIR=$PWD
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
LIB_DIR=$( echo "$SCRIPT_DIR" | awk -F '/boilerplate' '{print $1}')/projects/stories/src/lib
STORY_FILE="$LIB_DIR/$ID/$ID.stories.ts"
sed -e s/Boilerplate/$CAMEL/g -e s/boilerplate/$ID/g $SCRIPT_DIR/boilerplate.stories.ts > $SCRIPT_DIR/$ID.temp.ts
cat $SCRIPT_DIR/$ID.temp.ts > $STORY_FILE
rm -f $SCRIPT_DIR/$ID.temp.ts
echo "SUCCESS: Storybook component added. Don't forget to add to 'components' in StoriesModule!"
cd "$ORIG_DIR"