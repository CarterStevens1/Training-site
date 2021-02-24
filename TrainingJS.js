
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
function hypertrophyParagraph() {
    var Hypertrophy = document.getElementById("hypertrophy");
    if (Hypertrophy.innerHTML = `Day 1<br>
                Exercise	Sets	Reps<br>
                1. Squat	5	5<br>
                2. Dumbbell Bench	4	10<br>
                3. Dumbbell Row	4	10<br>
                4. Seated Dumbbell Press	4	10<br>
                5. Lunge	4	10<br>
                6. Dumbbell Curl	3	10<br>
                7. Standing Barbell Tricep Extension	3	10<br>
                8. Calf Raise	3	12<br>
                9. Plank	5	20 secs<br>
                <br>
                <br>
                Day 2<br>
                Exercise	Sets	Reps<br>
                1. Bench Press	5	5<br>
                2. Machine Pec Deck	3	12<br>
                3. Leg Extension	4	10<br>
                4. Leg Curl	4	10<br>
                5. Pullup	4	10<br>
                6. Seated Lateral Raise	4	10<br>
                7. Dumbbell Hammer Curls	3	10<br>
                8. Rope Extension	3	10<br>
                9. Plank	5	20 secs<br>
                <br>
                <br>
                Day 3<br>
                Exercise	Sets	Reps<br>
                1. Deadlift	5	5<br>
                2. Incline Dumbbell Press	4	10<br>
                3. Lateral Raise	4	10<br>
                4. Pulldown	4	10<br>
                5. Leg Press	4	10<br>
                6. EZ Bar Curl	3	10<br>
                7. Skullcrushers	3	10<br>
                8. Dumbbell Shrugs	3	12<br>
                9. Plank	5	20 secs<br>
                `) {
        Hypertrophy.innerHTML = `  Push A<br>
                Exercise               Sets Reps<br>
                <br>
                Flat Bench Press        4   6-8<br>
                <br>
                Arnold Press            3   8-10<br>
                <br>
                Cable Crossover         3   10-12<br>
                <br>
                Dumbbell Lateral Raise  3   10-15<br>
                <br>
                Overhead Cable Extension 3  12-15<br>
                <br>
                Dips  3   Max Reps<br>
                <br>
                Pull A<br>
                Exercise              Sets Reps<br>
                <br>
                Pull Ups (add weight if needed) 4 6-8<br>
                <br>
                T-Bar Row 3 8-10<br>
                <br>
                Dumbbell Shrugs 3 10-12<br>
                <br>
                Face Pull 3 10-15<br>
                <br>
                EZ Bar Curl 3 8-10<br>
                <br>
                Rope Hammer Curl 3 12-15<br>
                <br>
                Legs A<br>
                Exercise Sets Reps<br>
                <br>
                Barbell Back Squats 4 6-8<br>
                <br>
                Romanian Deadlift 3 8-10<br>
                <br>
                Bulgarian Split Squat 3 10-12 / leg<br>
                <br>
                Lying Leg Curl 3 10-15<br>
                <br>
                Seated Calf Raises  3  8-10<br>
                <br>
                Hanging Leg Raises 3 12-15<br>
                </p>
            <p class="bSide">
                Push B<br>
                Exercise Sets  Reps<br>
                <br>
                Standing Overhead Press 4 8-10<br>
                <br>
                Incline Dumbbell Bench 3 8-10<br>
                <br>
                Hammer Strength Machine Press 3 10-12<br>
                <br>
                Cable Lateral Raise 3 10-15<br>
                <br>
                Tricep Pushdown 3 8-10<br>
                <br>
                Skullcrushers 3 10-12<br>
                <br>
                Pull B<br>
                Exercise Sets Reps<br>
                <br>
                Barbell Rows 4 6-8<br>
                <br>
                Lat Pulldown (1.5 reps) 3 8-10<br>
                <br>
                Chest Supported Incline Row  3 10-12<br>
                <br>
                Rear Delt Fly  3 10-15<br>
                <br>
                Chin Ups (Biceps focus) 3 AMRAP<br>
                <br>
                Incline Curl  3 10-12<br>
                <br>
                Legs B<br>
                Exercise Sets Reps<br>
                <br>
                Trap Bar Deadlift 4 6-8<br>
                <br>
                Leg Press 3  8-10<br>
                <br>
                Stability Ball Leg Curl  3  10-12<br>
                <br>
                Walking Lunges 3 12-15 / leg<br>
                <br>
                Leg Press Calf Raises 3 12-15<br>
                <br>
                Cable Crunches 3 12-15<br>
                <br>`;
    }
    else {
        Hypertrophy.innerHTML = `Day 1<br>
                Exercise	Sets	Reps<br>
                1. Squat	5	5<br>
                2. Dumbbell Bench	4	10<br>
                3. Dumbbell Row	4	10<br>
                4. Seated Dumbbell Press	4	10<br>
                5. Lunge	4	10<br>
                6. Dumbbell Curl	3	10<br>
                7. Standing Barbell Tricep Extension	3	10<br>
                8. Calf Raise	3	12<br>
                9. Plank	5	20 secs<br>
                <br>
                <br>
                Day 2<br>
                Exercise	Sets	Reps<br>
                1. Bench Press	5	5<br>
                2. Machine Pec Deck	3	12<br>
                3. Leg Extension	4	10<br>
                4. Leg Curl	4	10<br>
                5. Pullup	4	10<br>
                6. Seated Lateral Raise	4	10<br>
                7. Dumbbell Hammer Curls	3	10<br>
                8. Rope Extension	3	10<br>
                9. Plank	5	20 secs<br>
                <br>
                <br>
                Day 3<br>
                Exercise	Sets	Reps<br>
                1. Deadlift	5	5<br>
                2. Incline Dumbbell Press	4	10<br>
                3. Lateral Raise	4	10<br>
                4. Pulldown	4	10<br>
                5. Leg Press	4	10<br>
                6. EZ Bar Curl	3	10<br>
                7. Skullcrushers	3	10<br>
                8. Dumbbell Shrugs	3	12<br>
                9. Plank	5	20 secs<br>
                `

    }
    }

function cutParagraph() {
    var cutpage = document.getElementById("Cutpage");
    if (cutpage.innerHTML = `  It depends on how much fat you want to lose and your body composition. Keep in mind that you want to avoid muscle loss, which means that you don't want to rush things.<br>
                <br>
                Here are some common timelines you can follow for your cut:<br>
                <br>
                5 pounds or less: 4-6 weeks of cut<br>
                10 pounds or less: 6-12 weeks of cut<br>
                20 pounds or more: 20-24 weeks of cut<br>
                There is a general cutting guideline that people follow in order to achieve your goals; lose body fat at a pace of 1 pound per week.<br>
                <br>
                MONDAY:<br>
                LEGS	1) Walking lunges	16-20 (8-10 steps with each leg)	4<br>
                2) Barbell front squat	8-10	4<br>
                3) Barbell back squat	12-15	4<br>
                4) Dumbbell Bulgarian split squat	12-15 each leg	3<br>
                5a) Quad extension (superset 5b)	20	2<br>
                5b) Leg press (superset 5c)	20	2<br>
                5c) Bodyweight walking lunges	40 (20 steps each leg)	2<br>
                30 minutes steady state cardio<br>
                <br>
                TUESDAY:<br>
                BACK & BICEPS	1) Pull ups	6-8	5<br>
                2) Barbell bent over row	8-10	4<br>
                3a) Chin ups (superset 3b)	Rep to failure	3<br>
                3b) Barbell bicep curl	10-12	4<br>
                4) Rack pull	6-8	5<br>
                5) Low cable row (triple drop set)	10, 10, 10	2<br>
                6) Hammer curl	15-20	3<br>
                HIIT (15-20 x 30 seconds on / 30 seconds off<br>
                <br>
                WEDNESDAY:<br>
                REST DAY - Allow time for muscle recovery<br>
                <br>
                THURSDAY:<br>
                LEGS	1) Stiff leg deadlift	12-15	4<br>
                2) Smith machine 1 & 1/4 squats	10-12	4<br>
                3) Barbell hip extension	10-12	4<br>
                4) Laying hamstring curl	10-12 (+10-12 partials)	4<br>
                5a) Seated calf raise (superset with 5b)	10	3<br>
                5b) Standing calf raise (superset with 5c)	20	3<br>
                5c) Skipping	60 seconds	3<br>
                30 minutes steady state cardio<br>
                <br>
                FRIDAY:<br>
                CHEST, SHOULDERS & TRICEPS	1) Dumbbell shoulder press	8-10	4<br>
                2) Barbell incline bench press	8-10	4<br>
                3) Cable fly	8-10	4<br>
                4a) Dips (superset 4b)	15-20	3<br>
                4b) Dumbbell lat raise	10-12	3<br>
                5a) EZ bar overhead tricep extension (superset with 5b)	8-10	2<br>
                5b) Hammer grip cable tricep pulldown (superset with 5c)	8-10	2<br>
                5c) Press ups	Rep to failure	2<br>
                <br>
                SATURDAY:<br>
                CONDITIONING CIRCUIT	HIIT (15-20 x 30 seconds on / 30 seconds off<br>
                Complete 10 circuits of the following exercises with as little rest as possible, starting at 10 reps and dropping 1 rep each circuit. E.g. circuit 1 = 10 reps, circuit 2 = 9 reps, circuit 3 = 8 reps<br>
                Pull ups or chin ups		10<br>
                Dumbbell squat & press		10<br>
                Hanging leg raises or knee raises		10<br>
                Heavy medicine ball slam		10<br>
                Burpee with a press up		10<br>
                <br>
                SUNDAY:<br>
                REST DAY - Allow time for muscle recovery<br>
`) {
        cutpage.innerHTML = `<p>
                Advanced Cutting Program<br>
                <br>
                Day 1 - Chest and Triceps<br>
                <br>
                Chest<br>
                Exercise	Sets	Reps<br>
                Incline Dumbbell Press	4	12-15<br>
                Flat Dumbbell Press	3	12<br>
                Incline Flys	3	12<br>
                Pec Deck	3	12<br>
                <br>
                Triceps<br>
                Exercise	Sets	Reps<br>
                Skull Crushers	4	12-15<br>
                Rope Extensions	3	12<br>
                Straight Bar Pushdowns	3	12<br>
                <br>
                Abdominals<br>
                Exercise	Sets	Reps<br>
                Rope Crunch	4	20-25<br>
                Hanging Knee Raise	4	20-25<br>
                <br>
                Day 2 - Back and Biceps<br>
                <br>
                Back<br>
                <br>
                Exercise	Sets	Reps<br>
                Wide Grip Chins	4	12-15<br>
                Wide Grip Rows	3	12<br>
                Narrow Grip Pulldown	4	12-15<br>
                Hyper Extensions	3	12<br>
                <br>
                Biceps<br>
                <br>
                Exercise	Sets	Reps<br>
                Concentration Curls	4	12-15<br>
                EZ Bar Curl	3	12<br>
                <br>
                Day 3 - Legs and Shoulders<br>
                <br>
                Legs<br>
                <br>
                Exercise	Sets	Reps<br>
                Squats	4	12-15<br>
                Leg Extensions	3	12<br>
                Leg Curl	4	12-15<br>
                Stiff Leg Deadlifts	3	12<br>
                Seated Calf Raise	3	12<br>
                <br>
                Shoulders<br>
                <br>
                Exercise	Sets	Reps<br>
                Dumbbell Shoulders Press	4	12-15<br>
                Cable Lateral Raise	3	12<br>
                Reverse Cable Fly	3	12<br>
                Smith Machine Shrugs	4	12-15<br>
                <br>
                Abdominals<br>
                <br>
                Exercise	Sets	Reps<br>
                Rope Crunch	4	20-25<br>
                Hanging Knee Raise	4	20-25<br>
                <br>
                Day 4: Rest Day<br>
                <br>
                Day 5 - Chest and Triceps<br>
                <br>
                Chest<br>
                <br>
                Exercise	Sets	Reps<br>
                Incline Barbell Press	4	12-15<br>
                Flat Barbell Press	3	12<br>
                Flat Flys	3	12<br>
                Cable Crossovers	3	12<br>
                <br>
                Triceps<br>
                <br>
                Exercise	Sets	Reps<br>
                Reverse Grip Pushdown	4	12-15<br>
                Dumbbell Kickbacks	3	12<br>
                Dumbbell Extension	3	12<br>
                Abdominals<br>
                Exercise	Sets	Reps<br>
                Weighted Incline Crunches	4	20-25<br>
                Hip Thrusts	4	20-25<br>
                <br>
                Day 6 - Back and Biceps<br>
                <br>
                Back<br>
                <br>
                Exercise	Sets	Reps<br>
                Wide Grip Pulldowns	4	12-15<br>
                Bent Over Dumbbell Rows	3	12<br>
                Good Mornings	3	12<br>
                One Arm Dumbbell Row	3	12<br>
                <br>
                Biceps<br>
                <br>
                Exercise	Sets	Reps<br>
                Preacher Curl	4	12-15<br>
                Dumbbell Curl	3	12<br>
                <br>
                Day 7 - Legs and Shoulders<br>
                <br>
                Legs<br>
                <br>
                Exercise	Sets	Reps<br>
                Leg Press	4	12-15<br>
                Lunges	3	12<br>
                Leg Curl	4	12-15<br>
                Straight Leg Deadlifts	3	12<br>
                Standing Calf Raises	3	12-15<br>
                <br>
                Shoulders<br>
                <br>
                Exercise	Sets	Reps<br>
                Smith Machine Press	4	12-15<br>
                Dumbbell Lateral Raises	3	12<br>
                Dumbbell Rear Delt Flys	3	12<br>
                Upright Rows	3	12<br>
                <br>
                Abdominals<br>
                <br>
                Exercise	Sets	Reps<br>
                Weighted Incline Crunches	4	20-25<br>
                Hip Thrusts	4	20-25<br>
            </p>`;
    }
    else {
        cutpage.innerHTML = `It depends on how much fat you want to lose and your body composition. Keep in mind that you want to avoid muscle loss, which means that you don't want to rush things.<br>
                <br>
                Here are some common timelines you can follow for your cut:<br>
                <br>
                5 pounds or less: 4-6 weeks of cut<br>
                10 pounds or less: 6-12 weeks of cut<br>
                20 pounds or more: 20-24 weeks of cut<br>
                There is a general cutting guideline that people follow in order to achieve your goals; lose body fat at a pace of 1 pound per week.<br>
                <br>
                MONDAY:<br>
                LEGS	1) Walking lunges	16-20 (8-10 steps with each leg)	4<br>
                2) Barbell front squat	8-10	4<br>
                3) Barbell back squat	12-15	4<br>
                4) Dumbbell Bulgarian split squat	12-15 each leg	3<br>
                5a) Quad extension (superset 5b)	20	2<br>
                5b) Leg press (superset 5c)	20	2<br>
                5c) Bodyweight walking lunges	40 (20 steps each leg)	2<br>
                30 minutes steady state cardio<br>
                <br>
                TUESDAY:<br>
                BACK & BICEPS	1) Pull ups	6-8	5<br>
                2) Barbell bent over row	8-10	4<br>
                3a) Chin ups (superset 3b)	Rep to failure	3<br>
                3b) Barbell bicep curl	10-12	4<br>
                4) Rack pull	6-8	5<br>
                5) Low cable row (triple drop set)	10, 10, 10	2<br>
                6) Hammer curl	15-20	3<br>
                HIIT (15-20 x 30 seconds on / 30 seconds off<br>
                <br>
                WEDNESDAY:<br>
                REST DAY - Allow time for muscle recovery<br>
                <br>
                THURSDAY:<br>
                LEGS	1) Stiff leg deadlift	12-15	4<br>
                2) Smith machine 1 & 1/4 squats	10-12	4<br>
                3) Barbell hip extension	10-12	4<br>
                4) Laying hamstring curl	10-12 (+10-12 partials)	4<br>
                5a) Seated calf raise (superset with 5b)	10	3<br>
                5b) Standing calf raise (superset with 5c)	20	3<br>
                5c) Skipping	60 seconds	3<br>
                30 minutes steady state cardio<br>
                <br>
                FRIDAY:<br>
                CHEST, SHOULDERS & TRICEPS	1) Dumbbell shoulder press	8-10	4<br>
                2) Barbell incline bench press	8-10	4<br>
                3) Cable fly	8-10	4<br>
                4a) Dips (superset 4b)	15-20	3<br>
                4b) Dumbbell lat raise	10-12	3<br>
                5a) EZ bar overhead tricep extension (superset with 5b)	8-10	2<br>
                5b) Hammer grip cable tricep pulldown (superset with 5c)	8-10	2<br>
                5c) Press ups	Rep to failure	2<br>
                <br>
                SATURDAY:<br>
                CONDITIONING CIRCUIT	HIIT (15-20 x 30 seconds on / 30 seconds off<br>
                Complete 10 circuits of the following exercises with as little rest as possible, starting at 10 reps and dropping 1 rep each circuit. E.g. circuit 1 = 10 reps, circuit 2 = 9 reps, circuit 3 = 8 reps<br>
                Pull ups or chin ups		10<br>
                Dumbbell squat & press		10<br>
                Hanging leg raises or knee raises		10<br>
                Heavy medicine ball slam		10<br>
                Burpee with a press up		10<br>
                <br>
                SUNDAY:<br>
                REST DAY - Allow time for muscle recovery<br>
`
    }
}

function bulkParagraph() {
    var bulkpage = document.getElementById("BulkPage");
    if (bulkpage.innerHTML = ` BULK:<br>
                MONDAY<br>
                Compounds:<br>
                Squats: 5x5: 5th set should be the same weight as last Friday's triple<br>
                Bench Press: 5x5: 5th set should be the same weight as last Friday's triple<br>
                Rows: 5x5: 5th set should be the same weight as last Friday's triple<br>
                <br>
                Assistance:<br>
                Weighted hyperextensions: 2x8<br>
                Weighted Sit-ups: 4x8<br>
                <br>
                <br>
                WEDNESDAY<br>
                Compounds:<br>
                Squats: 4x5: First three sets are the same as Monday's. 4th set is the same weight as the third set<br>
                Incline Bench/Military Press: 4x5: Increase weight 10-15% each set<br>
                Deadlifts: 4x5: Increase weight 10-15% each set<br>
                <br>
                Assistance:<br>
                Sit-ups: 3x25<br>
                <br>
                <br>
                FRIDAY<br>
                Compounds:<br>
                Squats: 4x5(Same weight as Monday) + 1x3 (2.5% above the weight of Mondays last set) + 1x8 (Same weight as your third set)<br>
                Bench: 4x5(Same weight as Monday) + 1x3 (2.5% above the weight of Mondays last set) + 1x8 (Same weight as your third set)<br>
                Rows: 4x5(Same weight as Monday) + 1x3 (2.5% above the weight of Mondays last set) + 1x8 (Same weight as your third set)<br>
                <br>
                Assistance:<br>
                Weighted Dips: 3x8<br>
                Barbell Curls: 3x8<br>
                Overhead tricep extensions: 3x8<br>
`) {
        bulkpage.innerHTML = `Shoulders and Abs<br>
                Shoulders<br>
                Exercise	Sets	Reps<br>
                Military Press	4	8-10<br>
                Barbell Front Raise	3	10<br>
                Upright Row	4	8<br>
                Dumbbell Lateral Raise	4	8<br>
                Dumbbell Reverse Fly	3	10<br>
                Abs<br>
                Exercise	Sets	Reps<br>
                Decline Sit Ups	3	MAX<br>
                Notes<br>
                Dumbbell lateral raises can be supersetted with upright rows. Hold a weight plate on your chest for decline situps if bodyweight is not challenging enough.<br>
                Arms and Abs<br>
                Arms<br>
                Exercise	Sets	Reps<br>
                Standing Barbell Curl	4	8<br>
                Preacher Curls	4	8<br>
                Cable Curl	4	8<br>
                Abs<br>
                Close Grip Bench Press	4	6<br>
                Tricep Dip	3	10+ (MAX)<br>
                Lying Tricep Extension (skullcrusher)	4	8-10<br>
                Forearms<br>
                Barbell Wrist Curl	3	10<br>
                Abs<br>
                Exercise	Sets	Reps<br>
                Hanging Leg Raise	3	MAX<br>
                Notes<br>
                None<br>
                Legs and Abs<br>
                Quads/Hamstrings/Glutes<br>
                Exercise	Sets	Reps<br>
                Squat	5	5-7<br>
                45 Degree Leg Press	4	10<br>
                Leg Extension	4	8-10<br>
                Leg Curl	4	8-10<br>
                Calves<br>
                Exercise	Sets	Reps<br>
                Seated calf Raise	4	12-15<br>
                45 Degree Calf Press	4	10-12<br>
                Abs<br>
                Hover	3	As long as poss<br>
                Notes<br>
                Seated Calf Raise: You can do 15 bodyweight standing calf raises immediately after to add intensity.<br>
                Back and Abs<br>
                Back<br>
                Exercise	Sets	Reps<br>
                Wide Grip Pull Up	5	8-10<br>
                Lat Pull Down	4	10<br>
                Seated Row	4	10<br>
                One Arm Dumbbell Row	3	8<br>
                Abs<br>
                Exercise	Sets	Reps<br>
                Decline Abdominal Reach	3	MAX<br>
                Notes<br>
                Lat pull downs can be supersetted with seated row to add intensity.<br>
                Friday - Chest and Abs<br>
                Chest<br>
                Exercise	Sets	Reps<br>
                Barbell Bench Press	5	6-10<br>
                Incline Bench Press	4	8<br>
                Chest Dip	4	8<br>
                Dumbbell Flys	4	10-12<br>
                Abs<br>
                Exercise	Sets	Reps<br>
                Exercise Ball Crunch	3	20<br>
                Notes<br>
                Barbell Bench can be supersetted with Incline Dumbbell Flys. Dumbbell Flys: You can do these on either flat bench of incline depending on what part of the chest you want to hit.<br>
                Saturday and Sunday - rest days<br>`
    }
    else {
        bulkpage.innerHTML = ` BULK:<br>
                MONDAY<br>
                Compounds:<br>
                Squats: 5x5: 5th set should be the same weight as last Friday's triple<br>
                Bench Press: 5x5: 5th set should be the same weight as last Friday's triple<br>
                Rows: 5x5: 5th set should be the same weight as last Friday's triple<br>
                <br>
                Assistance:<br>
                Weighted hyperextensions: 2x8<br>
                Weighted Sit-ups: 4x8<br>
                <br>
                <br>
                WEDNESDAY<br>
                Compounds:<br>
                Squats: 4x5: First three sets are the same as Monday's. 4th set is the same weight as the third set<br>
                Incline Bench/Military Press: 4x5: Increase weight 10-15% each set<br>
                Deadlifts: 4x5: Increase weight 10-15% each set<br>
                <br>
                Assistance:<br>
                Sit-ups: 3x25<br>
                <br>
                <br>
                FRIDAY<br>
                Compounds:<br>
                Squats: 4x5(Same weight as Monday) + 1x3 (2.5% above the weight of Mondays last set) + 1x8 (Same weight as your third set)<br>
                Bench: 4x5(Same weight as Monday) + 1x3 (2.5% above the weight of Mondays last set) + 1x8 (Same weight as your third set)<br>
                Rows: 4x5(Same weight as Monday) + 1x3 (2.5% above the weight of Mondays last set) + 1x8 (Same weight as your third set)<br>
                <br>
                Assistance:<br>
                Weighted Dips: 3x8<br>
                Barbell Curls: 3x8<br>
                Overhead tricep extensions: 3x8<br>
`
    }
}
