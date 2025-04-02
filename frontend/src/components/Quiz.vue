<template>
	<div v-if="quiz.data">
		<div
			class="bg-surface-blue-2 space-y-1 py-2 px-2 mb-4 rounded-md text-sm text-ink-blue-2"
		>
			<div class="leading-5">
				{{
					__('This quiz consists of {0} questions.').format(questions.length)
				}}
			</div>
			<div v-if="quiz.data?.duration" class="leading-5">
				{{
					__(
						'Please ensure that you complete all the questions in {0} minutes.'
					).format(quiz.data.duration)
				}}
			</div>
			<div v-if="quiz.data?.duration" class="leading-5">
				{{
					__(
						'If you fail to do so, the quiz will be automatically submitted when the timer ends.'
					)
				}}
			</div>
			<div v-if="quiz.data.passing_percentage" class="leading-relaxed">
				{{
					__(
						'You will have to get {0}% correct answers in order to pass the quiz.'
					).format(quiz.data.passing_percentage)
				}}
			</div>
			<div v-if="quiz.data.max_attempts" class="leading-5">
				{{
					__('You can attempt this quiz {0}.').format(
						quiz.data.max_attempts == 1
							? '1 time'
							: `${quiz.data.max_attempts} times`
					)
				}}
			</div>
		</div>

		<div v-if="quiz.data.duration" class="flex flex-col space-x-1 my-4">
			<div class="mb-2">
				<span class=""> {{ __('Time') }}: </span>
				<span class="font-semibold">
					{{ formatTimer(timer) }}
				</span>
			</div>
			<ProgressBar :progress="timerProgress" />
		</div>

		<div v-if="!quizStarted" >
			<div class="border text-center p-20 rounded-md">
				<div class="quiz-heading">
					{{ quiz.data.title }}
				</div>
				<div style="display: flex;
                    align-items: center;
                    justify-content: left;
					margin: 2rem 0;
                
">
					<CircleHelp style="stroke: orangered;" />Questions count:{{ questions.length }}
				</div>
				<Button
					v-if="
						!quiz.data.max_attempts ||
						attempts.data?.length < quiz.data.max_attempts
					"
					@click="startQuiz"
					class="mt-2 start-quiz-btn"
				>
					<span>
						{{ __('Start') }}
					</span>
				</Button>
				<div v-else class="leading-5 text-ink-gray-7">
					{{
						__(
							'You have already exceeded the maximum number of attempts allowed for this quiz.'
						)
					}}
				</div>
			</div>
		</div>
		<div v-else-if="!quizSubmission.data">
    <div class="border rounded-md p-5 relative">
        <!-- Main content with questions -->
        <div class="overflow-y-auto max-h-96 space-y-8 pr-24">
            <div 
                v-for="(question, qtidx) in questions" 
                :key="qtidx"
                :id="`question-${qtidx}`"
                class="border-b pb-6 last:border-b-0"
            >
                <div class="flex justify-between">
                    <div class="text-sm text-ink-gray-5">
                        <span class="mr-2">
                            {{ __('Question {0}').format(qtidx + 1) }}:
                        </span>
                        <span v-if="questionDetailsMap[question.question]">
                            {{ getInstructions(questionDetailsMap[question.question]) }}
                        </span>
                    </div>
                    <div class="text-ink-gray-9 text-sm font-semibold item-left">
                        {{ question.marks }}
                        {{ question.marks == 1 ? __('Mark') : __('Marks') }}
                    </div>
                </div>
                <div
                    v-if="questionDetailsMap[question.question]"
                    class="text-ink-gray-9 font-semibold mt-2 leading-5"
                    v-html="questionDetailsMap[question.question].question"
                ></div>
                
                <!-- Choices type question -->
                <div v-if="questionDetailsMap[question.question]?.type == 'Choices'">
                    <div v-for="index in 4" :key="index">
                        <label
                            v-if="questionDetailsMap[question.question][`option_${index}`]"
                            class="flex items-center bg-surface-gray-3 rounded-md p-3 mt-4 w-full cursor-pointer focus:border-blue-600"
                        >
                            <input
                                v-if="!showAnswersMap[question.question] && !questionDetailsMap[question.question].multiple"
                                type="radio"
                                :name="encodeURIComponent(questionDetailsMap[question.question].question) + qtidx"
                                class="w-3.5 h-3.5 text-ink-gray-9 focus:ring-outline-gray-modals"
                                @change="markAnswer(qtidx, index)"
                                :checked="selectedOptionsMap[question.question] && selectedOptionsMap[question.question][index-1]"
                            />

                            <input
                                v-else-if="!showAnswersMap[question.question] && questionDetailsMap[question.question].multiple"
                                type="checkbox"
                                :name="encodeURIComponent(questionDetailsMap[question.question].question) + qtidx"
                                class="w-3.5 h-3.5 text-ink-gray-9 rounded-sm focus:ring-outline-gray-modals"
                                @change="markAnswer(qtidx, index)"
                                :checked="selectedOptionsMap[question.question] && selectedOptionsMap[question.question][index-1]"
                            />
                            <div
                                v-else-if="quiz.data.show_answers && showAnswersMap[question.question]"
                            >
                                <CheckCircle
                                    v-if="showAnswersMap[question.question][index-1] == 1"
                                    class="w-4 h-4 text-ink-green-2"
                                />
                                <MinusCircle
                                    v-else-if="showAnswersMap[question.question][index-1] == 2"
                                    class="w-4 h-4 text-ink-green-2"
                                />
                                <XCircle
                                    v-else-if="showAnswersMap[question.question][index-1] == 0"
                                    class="w-4 h-4 text-ink-red-3"
                                />
                                <MinusCircle v-else class="w-4 h-4" />
                            </div>
                            <span
                                class="ml-2"
                                v-html="questionDetailsMap[question.question][`option_${index}`]"
                            >
                            </span>
                        </label>
                        <div
                            v-if="questionDetailsMap[question.question][`explanation_${index}`]"
                            class="mt-2 text-xs"
                            v-show="showAnswersMap[question.question]"
                        >
                            {{ questionDetailsMap[question.question][`explanation_${index}`] }}
                        </div>
                    </div>
                </div>
                
                <!-- User Input type question -->
                <div v-else-if="questionDetailsMap[question.question]?.type == 'User Input'">
                    <FormControl
                        v-model="userAnswers[question.question]"
                        type="textarea"
                        :disabled="showAnswersMap[question.question] ? true : false"
                        class="my-2"
                    />
                    <div v-if="showAnswersMap[question.question]">
                        <Badge v-if="showAnswersMap[question.question][0]" :label="__('Correct')" theme="green">
                            <template #prefix>
                                <CheckCircle class="w-4 h-4 text-ink-green-2 mr-1" />
                            </template>
                        </Badge>
                        <Badge v-else theme="red" :label="__('Incorrect')">
                            <template #prefix>
                                <XCircle class="w-4 h-4 text-ink-red-3 mr-1" />
                            </template>
                        </Badge>
                    </div>
                </div>
                
                <!-- Open Ended type question -->
                <div v-else-if="questionDetailsMap[question.question]">
                    <TextEditor
                        class="mt-4"
                        :content="userAnswers[question.question]"
                        @change="(val) => (userAnswers[question.question] = val)"
                        :editable="true"
                        :fixedMenu="true"
                        editorClass="prose-sm max-w-none border-b border-x bg-surface-gray-2 rounded-b-md py-1 px-2 min-h-[7rem]"
                    />
                </div>
                
                <!-- Check button for individual question -->
                <div v-if="quiz.data.show_answers">
                    <Button
                        v-if="!showAnswersMap[question.question] && questionDetailsMap[question.question]?.type != 'Open Ended'"
                        @click="checkAnswer(qtidx)"
                        class="mt-4"
                    >
                        <span>
                            {{ __('Check') }}
                        </span>
                    </Button>
                </div>
            </div>
        </div>
        
        <!-- Question Navigation Section - Now sticky on right side -->
        <div class="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-2 p-2 rounded-md border border-gray-200 bg-white">
            <button
                v-for="(question, idx) in questions"
                :key="idx"
                @click="scrollToQuestion(idx)"
                class="w-8 h-8 flex items-center justify-center rounded-md"
                :class="{
                    'bg-blue-500 text-white': questionAnswered[idx],
                    'border border-gray-300': !questionAnswered[idx]
                }"
            >
                {{ idx + 1 }}
            </button>
        </div>
        
        <!-- Submit button at bottom -->
        <div class="flex justify-end mt-6">
            <Button @click="submitQuiz">
                <span>
                    {{ __('Submit Quiz') }}
                </span>
            </Button>
        </div>
    </div>
</div>
		<div v-else class="border rounded-md p-20 text-center space-y-2">
			<div class="text-lg font-semibold text-ink-gray-9">
				{{ __('Quiz Summary') }}
			</div>
			<div
				v-if="quizSubmission.data.is_open_ended"
				class="leading-5 text-ink-gray-7"
			>
				{{
					__(
						"Your submission has been successfully saved. The instructor will review and grade it shortly, and you'll be notified of your final result."
					)
				}}
			</div>
			<div v-else>
				{{
					__(
						'You got {0}% correct answers with a score of {1} out of {2}'
					).format(
						Math.ceil(quizSubmission.data.percentage),
						quizSubmission.data.score,
						quizSubmission.data.score_out_of
					)
				}}
			</div>
			<Button
				@click="resetQuiz()"
				class="mt-2"
				v-if="
					!quiz.data.max_attempts ||
					attempts?.data.length < quiz.data.max_attempts
				"
			>
				<span>
					{{ __('Try Again') }}
				</span>
			</Button>
		</div>
		<div
			v-if="
				quiz.data.show_submission_history &&
				attempts?.data &&
				attempts.data.length > 0
			"
			class="mt-10"
		>
			<ListView
				:columns="getSubmissionColumns()"
				:rows="attempts?.data"
				row-key="name"
				:options="{
					selectable: false,
					showTooltip: false,
					emptyState: { title: __('No Quiz submissions found') },
				}"
			>
			</ListView>
		</div>
	</div>
</template>
<script setup>
import {
	Badge,
	Button,
	call,
	createResource,
	ListView,
	TextEditor,
	FormControl,
} from 'frappe-ui'
import { ref, watch, reactive, inject, computed, onMounted } from 'vue'
import { createToast, showToast } from '@/utils/'
import { CheckCircle, XCircle, MinusCircle, CircleHelp} from 'lucide-vue-next'
import { timeAgo } from '@/utils'
import { useRouter } from 'vue-router'
import ProgressBar from '@/components/ProgressBar.vue'

const user = inject('$user')
const quizStarted = ref(false)
const questionDetailsMap = reactive({})
const selectedOptionsMap = reactive({})
const showAnswersMap = reactive({})
const userAnswers = reactive({})
const questionAnswered = reactive({})
let questions = reactive([])
const timer = ref(0)
let timerInterval = null
const router = useRouter()

const props = defineProps({
	quizName: {
		type: String,
		required: true,
	},
})

const quiz = createResource({
	url: 'frappe.client.get',
	makeParams(values) {
		return {
			doctype: 'LMS Quiz',
			name: props.quizName,
		}
	},
	cache: ['quiz', props.quizName],
	auto: true,
	transform(data) {
		data.duration = parseInt(data.duration)
	},
	onSuccess(data) {
		populateQuestions()
		setupTimer()
	},
})

const populateQuestions = () => {
	let data = quiz.data
	if (data.shuffle_questions) {
		questions = shuffleArray(data.questions)
		if (data.limit_questions_to) {
			questions = questions.slice(0, data.limit_questions_to)
		}
	} else {
		questions = data.questions
	}
}

const setupTimer = () => {
	if (quiz.data.duration) {
		timer.value = quiz.data.duration * 60
	}
}

const startTimer = () => {
	timerInterval = setInterval(() => {
		timer.value--
		if (timer.value == 0) {
			clearInterval(timerInterval)
			submitQuiz()
		}
	}, 1000)
}

const formatTimer = (seconds) => {
	const hrs = Math.floor(seconds / 3600)
		.toString()
		.padStart(2, '0')
	const mins = Math.floor((seconds % 3600) / 60)
		.toString()
		.padStart(2, '0')
	const secs = (seconds % 60).toString().padStart(2, '0')
	return hrs != '00' ? `${hrs}:${mins}:${secs}` : `${mins}:${secs}`
}

const timerProgress = computed(() => {
	return (timer.value / (quiz.data.duration * 60)) * 100
})

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}

const attempts = createResource({
	url: 'frappe.client.get_list',
	makeParams(values) {
		return {
			doctype: 'LMS Quiz Submission',
			filters: {
				member: user.data?.name,
				quiz: quiz.data?.name,
			},
			fields: [
				'name',
				'creation',
				'score',
				'score_out_of',
				'percentage',
				'passing_percentage',
			],
			order_by: 'creation desc',
		}
	},
	transform(data) {
		data.forEach((submission, index) => {
			submission.creation = timeAgo(submission.creation)
			submission.idx = index + 1
		})
	},
})

watch(
	() => quiz.data,
	() => {
		if (quiz.data) {
			populateQuestions()
		}
		if (quiz.data && quiz.data.max_attempts) {
			attempts.reload()
			resetQuiz()
		}
	}
)

const quizSubmission = createResource({
	url: 'lms.lms.doctype.lms_quiz.lms_quiz.quiz_summary',
	makeParams(values) {
		return {
			quiz: quiz.data.name,
			results: localStorage.getItem(quiz.data.title),
		}
	},
})

const getQuestionDetails = (questionName) => {
	createResource({
		url: 'lms.lms.utils.get_question_details',
		params: {
			question: questionName,
		},
		auto: true,
		onSuccess(data) {
			questionDetailsMap[questionName] = data;
			if (!selectedOptionsMap[questionName]) {
				selectedOptionsMap[questionName] = [0, 0, 0, 0];
			}
		},
	})
}

const startQuiz = () => {
	quizStarted.value = true;
	localStorage.removeItem(quiz.data.title);
	if (quiz.data.duration) startTimer();
	
	// Load all question details at once
	questions.forEach(q => {
		getQuestionDetails(q.question);
	});
}

const scrollToQuestion = (idx) => {
	const element = document.getElementById(`question-${idx}`);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
}

const markAnswer = (qtidx, index) => {
	const questionName = questions[qtidx].question;
	
	if (!questionDetailsMap[questionName].multiple) {
		selectedOptionsMap[questionName] = [0, 0, 0, 0];
	}
	
	selectedOptionsMap[questionName][index - 1] = selectedOptionsMap[questionName][index - 1] ? 0 : 1;
	questionAnswered[qtidx] = true;
}

const getAnswers = (questionName) => {
	let answers = [];
	const type = questionDetailsMap[questionName].type;

	if (type == 'Choices') {
		selectedOptionsMap[questionName].forEach((value, index) => {
			if (value)
				answers.push(questionDetailsMap[questionName][`option_${index + 1}`]);
		});
	} else {
		answers.push(userAnswers[questionName]);
	}

	return answers;
}

const checkAnswer = (qtidx) => {
	const questionName = questions[qtidx].question;
	let answers = getAnswers(questionName);
	
	if (!answers.length) {
		createToast({
			title: 'Please select an option',
			icon: 'alert-circle',
			iconClasses: 'text-yellow-600 bg-yellow-100 rounded-full',
			position: 'top-center',
		});
		return;
	}

	createResource({
		url: 'lms.lms.doctype.lms_quiz.lms_quiz.check_answer',
		params: {
			question: questionName,
			type: questionDetailsMap[questionName].type,
			answers: JSON.stringify(answers),
		},
		auto: true,
		onSuccess(data) {
			let type = questionDetailsMap[questionName].type;
			if (type == 'Choices') {
				if (!showAnswersMap[questionName]) {
					showAnswersMap[questionName] = [];
				}
				
				selectedOptionsMap[questionName].forEach((option, index) => {
					if (option) {
						showAnswersMap[questionName][index] = option && data[index];
					} else if (data[index] == 2) {
						showAnswersMap[questionName][index] = 2;
					} else {
						showAnswersMap[questionName][index] = undefined;
					}
				});
			} else {
				showAnswersMap[questionName] = [data];
			}
			addToLocalStorage(questionName);
			questionAnswered[qtidx] = true;
		},
	});
}

const addToLocalStorage = (questionName) => {
	let quizData = JSON.parse(localStorage.getItem(quiz.data.title)) || [];
	let questionData = {
		question_name: questionName,
		answer: getAnswers(questionName).join(),
		is_correct: showAnswersMap[questionName].filter((answer) => {
			return answer != undefined;
		}),
	};
	
	// Remove existing entry for this question if any
	quizData = quizData.filter(item => item.question_name !== questionName);
	quizData.push(questionData);
	localStorage.setItem(quiz.data.title, JSON.stringify(quizData));
}

const submitQuiz = () => {
	// Process all questions that haven't been checked yet
	questions.forEach((question, idx) => {
		const questionName = question.question;
		
		if (!showAnswersMap[questionName] && questionDetailsMap[questionName]) {
			if (questionDetailsMap[questionName].type == 'Open Ended') {
				if (userAnswers[questionName]) {
					let quizData = JSON.parse(localStorage.getItem(quiz.data.title)) || [];
					let questionData = {
						question_name: questionName,
						answer: userAnswers[questionName],
						is_correct: [],
					};
					quizData.push(questionData);
					localStorage.setItem(quiz.data.title, JSON.stringify(quizData));
				}
			} else if (selectedOptionsMap[questionName]?.some(option => option === 1)) {
				// For multiple choice questions that have been answered but not checked
				let answers = getAnswers(questionName);
				if (answers.length > 0) {
					let quizData = JSON.parse(localStorage.getItem(quiz.data.title)) || [];
					let questionData = {
						question_name: questionName,
						answer: answers.join(),
						is_correct: [],
					};
					quizData.push(questionData);
					localStorage.setItem(quiz.data.title, JSON.stringify(quizData));
				}
			}
		}
	});
	
	// Submit all the answers
	createSubmission();
}

const createSubmission = () => {
	quizSubmission.submit(
		{},
		{
			onSuccess(data) {
				markLessonProgress();
				if (quiz.data && quiz.data.max_attempts) attempts.reload();
				if (quiz.data.duration) clearInterval(timerInterval);
			},
			onError(err) {
				const errorTitle = err?.message || '';
				if (errorTitle.includes('MaximumAttemptsExceededError')) {
					const errorMessage = err.messages?.[0] || err;
					showToast(__('Error'), __(errorMessage), 'x');
					setTimeout(() => {
						window.location.reload();
					}, 3000);
				}
			},
		}
	);
}

const resetQuiz = () => {
	quizStarted.value = false;
	Object.keys(selectedOptionsMap).forEach(key => {
		selectedOptionsMap[key] = [0, 0, 0, 0];
	});
	Object.keys(showAnswersMap).forEach(key => {
		delete showAnswersMap[key];
	});
	Object.keys(userAnswers).forEach(key => {
		delete userAnswers[key];
	});
	Object.keys(questionAnswered).forEach(key => {
		questionAnswered[key] = false;
	});
	quizSubmission.reset();
	populateQuestions();
	setupTimer();
}

const getInstructions = (question) => {
	if (question.type == 'Choices')
		if (question.multiple) return __('Choose all answers that apply');
		else return __('Choose one answer');
	else return __('Type your answer');
}

const markLessonProgress = () => {
	if (router.currentRoute.value.name == 'Lesson') {
		call('lms.lms.api.mark_lesson_progress', {
			course: router.currentRoute.value.params.courseName,
			chapter_number: router.currentRoute.value.params.chapterNumber,
			lesson_number: router.currentRoute.value.params.lessonNumber,
		});
	}
}

const getSubmissionColumns = () => {
	return [
		{
			label: 'No.',
			key: 'idx',
		},
		{
			label: 'Date',
			key: 'creation',
		},
		{
			label: 'Score',
			key: 'score',
			align: 'center',
		},
		{
			label: 'Score out of',
			key: 'score_out_of',
			align: 'center',
		},
		{
			label: 'Percentage',
			key: 'percentage',
			align: 'center',
		},
	];
}
</script>
<style scoped>
.start-quiz-btn {
	background-color: rgba(227, 77, 0, 1);
	height: 40px;
	padding: 0 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: 0;
	border: none;
	min-height: auto;
	border-radius: 5px;
	transition: 0.2s;
	text-decoration: none;
	caret-color: transparent;
	box-shadow: none;
	color: #fff;

}

.quiz-heading {
	font-size: 30px;
	font-style: normal;
	font-weight: 700;
	line-height: 35px;
	color: #001931;
	margin: 0;
	padding: 0;
	justify-content: left;
	display: flex;
}
</style>